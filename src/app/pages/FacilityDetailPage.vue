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

        <v-btn
          :disabled="facility.free === 0"
          block
          color="primary"
          @click="navigate()"
          >{{ $t("facility.detail.reserve.label") }}</v-btn
        >
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
          :street="facility.address.street"
          :streetNumber="facility.address.streetNumber"
          :postalCode="facility.address.postalCode"
          :city="facility.address.city"
        />
      </v-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useOneFacility } from "@/app/reactive/facility.state"
import { useBrowser } from "@/app/reactive/browser.state"
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
    const AppBar = useAppBar()
    const Browser = useBrowser()
    const { findOneFacility, facility, isPending } = useOneFacility()

    onMounted(() => {
      AppBar.setTitle("facility.detail.appBarTitle")
      AppBar.setHasBackButton(true)
      Browser.setHasUnsavedData(false)
      findOneFacility(root.$route.params.id)
    })

    function navigate() {
      root.$router.push({ name: "booking.form" })
    }

    return {
      isPending,
      facility,
      navigate,
    }
  },
})
</script>
