<template>
  <section class="building-detail" v-if="building">
    <Carusel :building="building" />
    <v-container>
      <Address :building="building" />

      <p
        class="body-1 has-text-success"
        v-text="
          $t('building.detail.slots', {
            amount: building.capacity - building.occupied,
          })
        "
      ></p>

      <v-btn block color="primary" @click="navigate()">{{
        $t("building.detail.reserve.label")
      }}</v-btn>
      <Hint :content="$t('building.detail.reserve.hint')" />
      <v-divider></v-divider>
      <Prices />
      <v-divider></v-divider>
      <OpeningHours :text="building.openingHours.de" />
      <v-divider></v-divider>
      <Categories
        :image="
          building.images.categories
            | firebaseStorage(building.images.folderName)
        "
        style="margin-top: 16px"
      />
      <v-divider></v-divider>
      <Navigation
        map
        :image="
          building.images.map | firebaseStorage(building.images.folderName)
        "
        :street="building.street"
        :streetNumber="building.streetNumber"
        :postalCode="building.postalCode"
        :city="building.city"
      />
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneBuilding } from "../reactive/building.state"
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
    const { findOneBuilding, building } = useOneBuilding()

    onMounted(() => {
      setTitle("building.detail.appBarTitle")
      setHasBackButton(true)
      findOneBuilding(root.$route.params.id)
    })

    return {
      building,
      navigate: () => root.$router.push({ name: "booking.form" }),
    }
  },
})
</script>
