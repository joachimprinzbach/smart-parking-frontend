<template>
  <section class="object-detail" v-if="parkingObject">
    <Carusel :images="parkingObject.images.carousel" />
    <v-container fluid>
      <Address :parkingObject="parkingObject" />
      <p
        class="has-text-success"
        v-text="$t('object.detail.slots', { amount: 7 })"
      ></p>
      <v-btn block color="primary" @click="navigate()">{{
        $t("object.detail.book")
      }}</v-btn>
      <br />
      <Prices />
      <br />
      <OpeningHours :text="parkingObject.openingHours.de" />
      <br />
      <Categories :image="parkingObject.images.categories" />
      <br />
      <Navigation
        :image="parkingObject.images.map"
        :street="parkingObject.street"
        :streetNumber="parkingObject.streetNumber"
        :postalCode="parkingObject.postalCode"
        :city="parkingObject.city"
      />
      <br />
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'
import { useOneParkingObjects } from '../reactive/api/parking-objects.api'
import Prices from '@/app/components/Prices.vue'
import OpeningHours from '@/app/components/OpeningHours.vue'
import Carusel from '@/app/components/Carusel.vue'
import Navigation from '@/app/components/Navigation.vue'
import Categories from '@/app/components/Categories.vue'
import Address from '@/app/components/Address.vue'

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

    onMounted(() => {
      setTitle('object.detail.appBarTitle')
      setHasBackButton(true)
      findOneParkingObject('picasso')
    })

    return {
      parkingObject,
      navigate: () => root.$router.push({ name: 'booking.form' }),
    }
  },
})
</script>
