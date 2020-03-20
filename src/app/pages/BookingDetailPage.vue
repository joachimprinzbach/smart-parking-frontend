<template>
  <section class="booking-detail" v-if="parkingObject">
    <Carusel :images="parkingObject.images.carousel" />
    <v-container fluid>
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
        <p>Smart Parking Parkplätze im 2. UG</p>
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
      <OpeningHours :text="parkingObject.openingHours.de" />
      <br />
      <Prices />
      <v-dialog v-model="dialog" persistent>
        <v-card>
          <v-card-title class="headline">{{
            $t("booking.detail.dialog.title")
          }}</v-card-title>
          <v-card-text v-html="$t('booking.detail.dialog.text')"></v-card-text>
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
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/api/parking-objects.api"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import { diffFromNow, DateDiff } from "@/app/utils/date"

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
    const dialog = ref(false)

    onMounted(() => {
      setTitle("booking.detail.appBarTitle")
      setHasBackButton(true)
      findOneParkingObject("picasso")
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

    const dateDiffToString = (dateDiff: DateDiff): string => {
      const outputs: string[] = []
      const removePlural = (str: string) => str.substring(0, str.length - 1)
      Object.keys(dateDiff).forEach(key => {
        if (key) {
          const value = (dateDiff as any)[key]
          if (value && value > 0) {
            outputs.push(
              root
                .$t(`common.date.${value === 1 ? removePlural(key) : key}`, {
                  value,
                })
                .toString(),
            )
          }
        }
      })
      return outputs.join(" ")
    }

    return {
      time: computed(() =>
        dateDiffToString(diffFromNow(new Date("02/17/2020"))),
      ),
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
