<template>
  <section class="booking-detail">
    <div v-if="parkingObject === undefined || isPending">
      <v-skeleton-loader
        class="mx-auto skeleton-carusel"
        type="image"
      ></v-skeleton-loader>
      <v-container>
        <v-skeleton-loader
          class="mx-auto skeleton-content"
          type="heading, text, button, button, image, button"
        ></v-skeleton-loader>
      </v-container>
    </div>
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
        <div class="box">
          <p v-html="parkingObject.parkingHint.de"></p>
          <hr />
          <table>
            <tr>
              <th>{{ $t("booking.detail.currentParkingTime") }}</th>
              <td>{{ time }}</td>
            </tr>
            <tr>
              <th>{{ $t("booking.detail.currentParkingCosts") }}</th>
              <td>CHF 2.00</td>
            </tr>
          </table>
        </div>
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
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/parking-objects.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import { diffFromNow, dateDiffToString } from "@/app/utils/date"
import { useBooking } from "../reactive/booking.state"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carusel,
    Navigation,
    Categories,
    Address,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneParkingObject, parkingObject } = useOneParkingObjects()
    const { booking, loadBooking, isPending } = useBooking()
    const dialog = ref(false)

    onMounted(() => {
      setTitle("booking.detail.appBarTitle")
      setHasBackButton(true)
      findOneParkingObject("picasso")
      loadBooking(root.$route.params.id)
    })

    const openGate = () => {
      // TODO: Implement open gate process
    }

    const finish = () => (dialog.value = true)

    const agree = () => {
      // TODO: send request to backend
      root.$router.replace({
        name: "booking.payment",
        params: {
          id: "picasso",
        },
      })
    }

    const disagree = () => {
      dialog.value = false
    }

    return {
      time: computed(() =>
        dateDiffToString(root, diffFromNow(booking.startedAt)),
      ),
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

<style lang="scss">
.skeleton-carusel {
  .v-skeleton-loader__image {
    height: 250px;
  }
}
.skeleton-content {
  .v-skeleton-loader__heading {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .v-skeleton-loader__text {
    width: 200px;
    margin-bottom: 48px;
  }
  .v-skeleton-loader__button {
    margin-bottom: 25px;
    width: 100%;
  }
  .v-skeleton-loader__image {
    margin-bottom: 25px;
    height: 127px;
  }
}
</style>
