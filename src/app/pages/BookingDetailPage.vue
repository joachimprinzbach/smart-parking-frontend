<template>
  <section class="booking-detail">
    <BookingDetailSkeleton
      v-if="booking === undefined || facility === undefined || isPending"
    />
    <div v-if="facility && booking && !isPending">
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

        <Navigation
          v-if="!isDeleted"
          :image="facility.images.map"
          :street="facility.street"
          :streetNumber="facility.streetNumber"
          :postalCode="facility.postalCode"
          :city="facility.city"
        />
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
        <h3 class="title">{{ $t("booking.detail.description") }}</h3>
        <p class="body-2" v-html="joinTexts(facility.description.de)"></p>
        <Categories :image="facility.images.categories" />
        <v-divider></v-divider>
        <OpeningHours :text="facility.openingHours.de" />
        <v-divider></v-divider>
        <Prices />
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneFacility } from "../reactive/facility.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import BookingDetailSkeleton from "@/app/components/BookingDetailSkeleton.vue"
import BookingDetail from "@/app/components/BookingDetail.vue"
import ReservationDetail from "@/app/components/ReservationDetail.vue"
import { useBooking } from "@/app/reactive/booking.state"
import { useSnackbar } from "@/app/reactive/snackbar.state"
import { joinTexts } from "@/app/filters/join-texts.filter"
import { api } from "../api"

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
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneFacility, facility } = useOneFacility()
    const { showReservationCancelSnackbar } = useSnackbar()
    const {
      booking,
      loadBooking,
      cancelBooking,
      isPending,
      startBooking,
      stopBooking,
    } = useBooking()
    const dialog = ref(false)

    onMounted(async () => {
      setTitle("booking.detail.appBarTitle")
      setHasBackButton(true)
      const loadedBooking = await loadBooking(
        root.$router,
        root.$route.params.id,
      )
      if (loadedBooking) {
        findOneFacility(loadedBooking.facilityId)
      }
    })

    const openGate = async (gateId: string) => {
      await api.openGate({
        gateId,
        facilityId: booking.facilityId,
        bookingId: booking.id,
      })
    }

    const start = async () => {
      await startBooking()
      await loadBooking(root.$router, root.$route.params.id)
      openGate("main")
    }

    const cancel = async () => {
      await cancelBooking()
      showReservationCancelSnackbar()
      root.$router.replace({
        name: "home",
      })
    }

    const stop = async () => {
      await stopBooking()
      await loadBooking(root.$router, root.$route.params.id)
      root.$router.replace({
        name: "booking.payment",
        params: {
          id: root.$route.params.id,
        },
      })
    }

    return {
      start,
      isPending,
      booking,
      dialog,
      facility,
      openGate,
      stop,
      cancel,
      joinTexts,
      navigateToFacility: () =>
        root.$router.replace({
          name: "facility.detail",
          params: {
            id: facility.value.id,
          },
        }),
      isDeleted: computed(() => booking.state === "DELETED"),
      isReservation: computed(() => booking.state === "VERIFIED"),
      hasStarted: computed(() => booking.state === "STARTED"),
    }
  },
})
</script>
