<template>
  <section class="booking-detail">
    <BookingDetailSkeleton v-if="parkingObject === undefined || isPending" />
    <div v-if="parkingObject && !isPending">
      <Carusel :images="parkingObject.images.carousel" />
      <v-container>
        <Address :parkingObject="parkingObject" />
        <Navigation
          :image="parkingObject.images.map"
          :street="parkingObject.street"
          :streetNumber="parkingObject.streetNumber"
          :postalCode="parkingObject.postalCode"
          :city="parkingObject.city"
        />
        <br />
        <section v-if="isReservation">
          <ReservationDetail
            :parkingObject="parkingObject"
            @openGate="start()"
            @cancel="cancel()"
          />
        </section>
        <section v-if="hasStarted">
          <BookingDetail
            :parkingObject="parkingObject"
            @openDoor="openDoor()"
            @openGate="openGate()"
            @stop="stop()"
          />
        </section>
        <v-divider></v-divider>
        <h3 class="title">{{ $t("booking.detail.description") }}</h3>
        <p class="body-2" v-html="parkingObject.description.de"></p>
        <Categories :image="parkingObject.images.categories" />
        <v-divider></v-divider>
        <OpeningHours :text="parkingObject.openingHours.de" />
        <v-divider></v-divider>
        <Prices />
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/parking-objects.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import BookingDetailSkeleton from "@/app/components/BookingDetailSkeleton.vue"
import BookingDetail from "@/app/components/BookingDetail.vue"
import ReservationDetail from "@/app/components/ReservationDetail.vue"
import { useBooking } from "../reactive/booking.state"
import { useSnackbar } from "../reactive/snackbar.state"

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
    const { findOneParkingObject, parkingObject } = useOneParkingObjects()
    const { showReservationCancelSnackbar } = useSnackbar()
    const {
      booking,
      loadBooking,
      isPending,
      startBooking,
      stopBooking,
    } = useBooking()
    const dialog = ref(false)

    onMounted(() => {
      setTitle("booking.detail.appBarTitle")
      setHasBackButton(true)
      findOneParkingObject("picasso")
      loadBooking(root.$router, root.$route.params.id)
    })

    const openGate = () => {
      // TODO: Implement open gate process
      alert("The Gate is Opening!")
    }

    const openDoor = () => {
      // TODO: Implement open gate process
      alert("The Door is Opening!")
    }

    const start = async () => {
      await startBooking()
      await loadBooking(root.$router, root.$route.params.id)
      openGate()
    }

    const cancel = async () => {
      // TODO: await cancelBooking()
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
      parkingObject,
      openGate,
      openDoor,
      stop,
      cancel,
      isReservation: computed(() => booking.state === "VERIFIED"),
      hasStarted: computed(() => booking.state === "STARTED"),
    }
  },
})
</script>
