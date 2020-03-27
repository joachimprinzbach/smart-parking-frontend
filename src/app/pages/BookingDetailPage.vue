<template>
  <section class="booking-detail">
    <BookingDetailSkeleton v-if="parkingObject === undefined || isPending" />
    <div v-if="parkingObject && !isPending">
      <Carusel :images="parkingObject.images.carousel" />
      <v-container>
        <Address :parkingObject="parkingObject" />
        <br />
        <Navigation
          :image="parkingObject.images.map"
          :street="parkingObject.street"
          :streetNumber="parkingObject.streetNumber"
          :postalCode="parkingObject.postalCode"
          :city="parkingObject.city"
        />
        <br />
        <v-btn block color="primary" outlined @click="openGate()">{{
          $t("booking.detail.openGate")
        }}</v-btn>
        <br />
        <BookingDetailInfoBox
          :hint="parkingObject.parkingHint.de"
          :startedAt="booking.startedAt"
        />
        <br />
        <v-btn block color="primary" @click="finish()">{{
          $t("booking.detail.finish")
        }}</v-btn>
        <p class="hint">{{ $t("booking.detail.finishHint") }}</p>
        <br />
        <h3>{{ $t("booking.detail.description") }}</h3>
        <p v-html="parkingObject.description.de"></p>
        <Categories :image="parkingObject.images.categories" />
        <br />
        <br />
        <OpeningHours :text="parkingObject.openingHours.de" />
        <br />
        <Prices />
        <v-dialog v-model="dialog" persistent>
          <v-card>
            <v-card-title class="headline">{{
              $t("booking.detail.dialog.title")
            }}</v-card-title>
            <v-card-text
              v-html="$t('booking.detail.dialog.text')"
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text @click="disagree()">{{
                $t("booking.detail.dialog.disagree")
              }}</v-btn>
              <v-btn color="blue darken-1" text @click="agree()">{{
                $t("booking.detail.dialog.agree")
              }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/parking-objects.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import BookingDetailSkeleton from "@/app/components/BookingDetailSkeleton.vue"
import BookingDetailInfoBox from "@/app/components/BookingDetailInfoBox.vue"
import { useBooking } from "../reactive/booking.state"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carusel,
    Navigation,
    Categories,
    Address,
    BookingDetailSkeleton,
    BookingDetailInfoBox,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneParkingObject, parkingObject } = useOneParkingObjects()
    const { booking, loadBooking, isPending, stopBooking } = useBooking()
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

    const finish = () => (dialog.value = true)

    const agree = async () => {
      dialog.value = false
      await stopBooking()
      root.$router.replace({
        name: "booking.payment",
        params: {
          id: root.$route.params.id,
        },
      })
    }

    const disagree = () => {
      dialog.value = false
    }

    return {
      isPending,
      booking,
      dialog,
      parkingObject,
      openGate,
      finish,
      agree,
      disagree,
    }
  },
})
</script>
