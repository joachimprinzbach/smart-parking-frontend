<template>
  <section class="facility-detail">
    <FacilityDetailSkeleton v-if="isPending" />
    <div v-if="!isPending && facility">
      <Carusel :facility="facility" />
      <v-container>
        <Address :facility="facility" />
        <p
          class="body-1 has-text-success"
          v-text="
            $t('facility.detail.slots', {
              amount: facility.free,
            })
          "
        ></p>

        <v-btn block color="primary" @click="navigate()">{{
          $t("facility.detail.reserve.label")
        }}</v-btn>
        <Hint :content="$t('facility.detail.reserve.hint')" />
        <v-divider></v-divider>
        <Prices />
        <v-divider></v-divider>
        <OpeningHours :text="facility.openingHours.de" />
        <v-divider></v-divider>
        <Categories
          :image="facility.images.categories"
          style="margin-top: 16px"
        />
        <v-divider></v-divider>
        <Navigation
          map
          :image="facility.images.map"
          :street="facility.street"
          :streetNumber="facility.streetNumber"
          :postalCode="facility.postalCode"
          :city="facility.city"
        />
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useOneFacility } from "../reactive/facility.state"
import Prices from "@/app/components/Prices.vue"
import OpeningHours from "@/app/components/OpeningHours.vue"
import Carusel from "@/app/components/Carusel.vue"
import Navigation from "@/app/components/Navigation.vue"
import Categories from "@/app/components/Categories.vue"
import Address from "@/app/components/Address.vue"
import Hint from "@/app/components/Hint.vue"
import FacilityDetailSkeleton from "@/app/components/FacilityDetailSkeleton.vue"

export default defineComponent({
  components: {
    Prices,
    OpeningHours,
    Carusel,
    Navigation,
    Categories,
    Address,
    Hint,
    FacilityDetailSkeleton,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findOneFacility, facility, isPending } = useOneFacility()

    onMounted(() => {
      setTitle("facility.detail.appBarTitle")
      setHasBackButton(true)
      findOneFacility(root.$route.params.id)
    })

    return {
      isPending,
      facility,
      navigate: () => root.$router.push({ name: "booking.form" }),
    }
  },
})
</script>
