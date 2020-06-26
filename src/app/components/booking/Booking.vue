<template>
  <section v-if="facility">
    <Carusel :facility="facility" />
    <v-container>
      <Address :facility="facility" />

      <v-alert v-if="isDeleted" prominent type="error">
        {{ $t("booking.reservation.alertTime") }}
      </v-alert>

      <v-btn
        v-if="isDeleted"
        block
        color="primary"
        @click="navigateToFacility"
        >{{ $t("booking.reservation.goBackToFacility") }}</v-btn
      >

      <br />
      <section v-if="isReservation">
        <ReservationDetail
          :facility="facility"
          @openGate="gateId => start(gateId)"
          @cancel="cancel()"
        />
      </section>
      <section v-if="hasStarted">
        <BookingDetail
          :facility="facility"
          @openGate="gateId => openGate(gateId)"
          @stop="stop()"
        />
      </section>
      <v-divider></v-divider>
      <SectionHeading :text="$t('booking.detail.description')" />
      <p class="body-2" v-html="joinTexts(facility.description.de)"></p>
      <Categories :image="facility.images.categories" />
      <v-divider></v-divider>
      <OpeningHours :text="facility.openingHours.de" />
      <v-divider></v-divider>
      <Prices />
      <v-divider></v-divider>
      <Navigation
        v-if="!isDeleted"
        map
        :image="facility.images.map"
        :street="facility.address.street"
        :streetNumber="facility.address.streetNumber"
        :postalCode="facility.address.postalCode"
        :city="facility.address.city"
      />

      <v-snackbar color="success" v-model="hasSuccessGateSnackbar">
        {{ $t("booking.detail.gates.success") }}
      </v-snackbar>
      <v-snackbar color="error" v-model="hasErrorGateSnackbar">
        {{ $t("booking.detail.gates.error") }}
      </v-snackbar>
    </v-container>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  computed,
  ref,
} from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useOneFacility } from "@/app/reactive/facility.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { api } from "@/app/api"
import { useBooking } from "@/app/reactive/booking.state"
import { useSnackbar } from "@/app/reactive/snackbar.state"
import { BookingState } from "@/app/models/booking-state"
import { joinTexts } from "@/app/filters/join-texts.filter"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import BookingDetailSkeleton from "@/app/components/booking/BookingDetailSkeleton.vue"
import BookingDetail from "@/app/components/booking/BookingDetail.vue"
import ReservationDetail from "@/app/components/booking/ReservationDetail.vue"
import SectionHeading from "@/app/components/SectionHeading.vue"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carusel,
    Navigation,
    Categories,
    Address,
    BookingDetailSkeleton,
    BookingDetail,
    ReservationDetail,
    SectionHeading,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
  },
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()
    const { findOneFacility, facility } = useOneFacility()
    const { startBooking, cancelBooking, stopBooking } = useBooking()
    const { showReservationCancelSnackbar } = useSnackbar()

    const dialog = ref(false)
    const hasSuccessGateSnackbar = ref(false)
    const hasErrorGateSnackbar = ref(false)

    const hasStarted = computed(
      () => props.booking.state === BookingState.Started,
    )
    const isDeleted = computed(
      () => props.booking.state === BookingState.Deleted,
    )
    const isReservation = computed(
      () => props.booking.state === BookingState.Reserved,
    )

    onBeforeMount(() => {
      AppBar.setTitle("booking.detail.appBarTitle")
      AppBar.setHasBackButton(true)
      Browser.setHasUnsavedData(true)
      findOneFacility(props.booking.facilityId)
    })

    async function start() {
      await startBooking()
      openGate("main")
    }

    async function openGate(gateId: string) {
      const response = await api.openGate({
        gateId,
        facilityId: props.booking.facilityId,
        bookingId: props.booking.id,
      })
      if (response.wasSuccessful) {
        hasSuccessGateSnackbar.value = true
      } else {
        hasErrorGateSnackbar.value = true
      }
    }

    async function cancel() {
      await cancelBooking()
      showReservationCancelSnackbar()
      root.$router.replace({
        name: "home",
      })
    }

    async function stop() {
      await stopBooking()
    }

    function navigateToFacility() {
      root.$router.replace({
        name: "facility.detail",
        params: {
          id: facility.value.id,
        },
      })
    }

    return {
      facility,
      start,
      stop,
      cancel,
      navigateToFacility,
      hasStarted,
      isReservation,
      isDeleted,
      joinTexts,
      dialog,
      openGate,
      hasErrorGateSnackbar,
      hasSuccessGateSnackbar,
    }
  },
})
</script>
