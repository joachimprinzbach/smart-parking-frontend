<template>
  <section class="object-detail" v-if="parkingObject">
    <Carusel :images="parkingObject.images.carousel" />
    <v-container>
      <Address :parkingObject="parkingObject" />

      <p
        class="body-1 has-text-success"
        v-text="$t('object.detail.slots', { amount: 7 })"
      ></p>

      <v-btn block color="primary" @click="navigate()">{{
        $t("object.detail.reserve.label")
      }}</v-btn>
      <Hint :content="$t('object.detail.reserve.hint')" />
      <v-divider></v-divider>
      <Prices />
      <v-divider></v-divider>
      <OpeningHours :text="parkingObject.openingHours.de" />
      <v-divider></v-divider>
      <Categories
        :image="parkingObject.images.categories"
        style="margin-top: 16px"
      />
      <v-divider></v-divider>
      <Navigation
        map
        :image="parkingObject.images.map"
        :street="parkingObject.street"
        :streetNumber="parkingObject.streetNumber"
        :postalCode="parkingObject.postalCode"
        :city="parkingObject.city"
      />
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneParkingObjects } from "../reactive/parking-objects.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import Hint from "@/app/components/Hint.vue"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carusel,
    Navigation,
    Categories,
    Address,
    Hint,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneParkingObject, parkingObject } = useOneParkingObjects()

    onMounted(() => {
      setTitle("object.detail.appBarTitle")
      setHasBackButton(true)
      findOneParkingObject("picasso")
    })

    return {
      parkingObject,
      navigate: () => root.$router.push({ name: "booking.form" }),
    }
  },
})
</script>
