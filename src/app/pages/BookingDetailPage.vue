<template>
  <section class="booking-detail">
    <BookingDetailSkeleton
      v-if="booking === undefined || building === undefined || isPending"
    />
    <div v-if="building && booking && !isPending">
      <Carusel :building="building" />
      <v-container>
        <Address :building="building" />
        <Navigation
          :image="
            building.images.map | firebaseStorage(building.images.folderName)
          "
          :street="building.street"
          :streetNumber="building.streetNumber"
          :postalCode="building.postalCode"
          :city="building.city"
        />
        <br />
        <section v-if="isReservation">
          <ReservationDetail
            :building="building"
            @openGate="start()"
            @cancel="cancel()"
          />
        </section>
        <section v-if="hasStarted">
          <BookingDetail
            :building="building"
            @openDoor="openDoor()"
            @openGate="openGate()"
            @stop="stop()"
          />
        </section>
        <v-divider></v-divider>
        <h3 class="title">{{ $t("booking.detail.description") }}</h3>
        <p class="body-2" v-html="building.description.de"></p>
        <Categories
          :image="
            building.images.categories
              | firebaseStorage(building.images.folderName)
          "
        />
        <v-divider></v-divider>
        <OpeningHours :text="building.openingHours.de" />
        <v-divider></v-divider>
        <Prices />
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneBuilding } from "../reactive/building.state"
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
    const { findOneBuilding, building } = useOneBuilding()
    const { showReservationCancelSnackbar } = useSnackbar()
    const {
      booking,
      loadBooking,
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
        findOneBuilding(loadedBooking.buildingId)
      }
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
      building,
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
