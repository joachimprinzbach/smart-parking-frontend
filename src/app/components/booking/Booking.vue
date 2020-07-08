<template>
  <section>
    <Carousel :facility="facility" />
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

      <section v-if="isReservation">
        <ReservationDetail
          :facility="facility"
          :booking="booking"
          @openGate="gateId => start(gateId)"
          @cancel="cancel()"
        />
      </section>
      <section v-if="hasStarted">
        <BookingDetail
          :facility="facility"
          :booking="booking"
          @openGate="gateId => triggerGate(gateId)"
          @stop="stop()"
        />
      </section>
      <v-divider></v-divider>
      <Title :text="$t('booking.detail.description')" />
      <Content v-html="joinTexts(facility.description.de)"></Content>
      <v-divider></v-divider>
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
import { useBrowser } from "@/app/reactive/browser.state"
import { BookingState } from "@/app/models/booking-state"
import { FacilityModel } from "@/app/models/facility.model"
import { joinTexts } from "@/app/filters/join-texts.filter"
import { useOpenGate } from "@/app/reactive/facility"
import Prices from "@/app/components/facility/Prices.vue"
import OpeningHours from "@/app/components/facility/OpeningHours.vue"
import Carousel from "@/app/components/facility/Carousel.vue"
import Navigation from "@/app/components/facility/Navigation.vue"
import Categories from "@/app/components/facility/Categories.vue"
import Address from "@/app/components/facility/Address.vue"
import BookingDetailSkeleton from "@/app/components/booking/BookingDetailSkeleton.vue"
import BookingDetail from "@/app/components/booking/BookingDetail.vue"
import ReservationDetail from "@/app/components/booking/ReservationDetail.vue"
import Title from "@/app/components/common/Title.vue"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carousel,
    Navigation,
    Categories,
    Address,
    BookingDetailSkeleton,
    BookingDetail,
    ReservationDetail,
    Title,
    Content,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
    facility: {
      type: Object as () => FacilityModel,
      required: true,
    },
  },
  setup(props, { root, emit }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()
    const { openGate } = useOpenGate()

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
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(true)
    })

    function start() {
      emit("start")
    }

    function cancel() {
      emit("cancel")
    }

    function stop() {
      emit("stop")
    }

    async function triggerGate(gateId: string) {
      const response = await openGate(
        props.booking.id,
        props.booking.facilityId,
        gateId,
      )
      if (response.wasSuccessful) {
        hasSuccessGateSnackbar.value = true
      } else {
        hasErrorGateSnackbar.value = true
      }
    }

    function navigateToFacility() {
      root.$router.replace({
        name: "facility.detail",
        params: {
          id: props.booking.facilityId,
        },
      })
    }

    return {
      start,
      stop,
      cancel,
      navigateToFacility,
      hasStarted,
      isReservation,
      isDeleted,
      joinTexts,
      dialog,
      triggerGate,
      hasErrorGateSnackbar,
      hasSuccessGateSnackbar,
    }
  },
})
</script>
