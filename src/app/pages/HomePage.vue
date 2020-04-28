<template>
  <div class="home">
    <section class="lead has-background-primary has-text-white">
      <v-container>
        <p class="motto subtitle-1">{{ $t("home.motto") }}</p>
        <h3 class="title">{{ $t("home.first") }}</h3>
        <h3 class="title">{{ $t("home.second") }}</h3>
        <h3 class="title">{{ $t("home.third") }}</h3>
        <p class="payments subtitle-1">{{ $t("home.paymentMethods") }}</p>
        <v-img
          class="payment-methods"
          src="../../assets/payment-methods.svg"
        ></v-img>
      </v-container>
    </section>
    <v-container>
      <v-row dense v-for="facility in facilities" :key="facility.id">
        <v-col cols="12">
          <v-card @click="navigateToFacilityDetail(facility.id)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="facility.name"
                ></v-card-title>
                <v-card-subtitle
                  class="has-text-success subtitle-1"
                  v-text="
                    $t('facility.detail.slots', {
                      amount: facility.capacity - facility.occupied,
                    })
                  "
                ></v-card-subtitle>
                <section class="card-address">
                  <v-card-subtitle
                    class="body-2"
                    v-text="facility.street + ' ' + facility.streetNumber"
                  ></v-card-subtitle>
                  <v-card-subtitle
                    class="body-2"
                    v-text="facility.postalCode + ' ' + facility.city"
                  ></v-card-subtitle>
                </section>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img
                  :src="
                    facility.images.thumbnail
                      | firebaseStorage(facility.images.folderName)
                  "
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useAllFacilities } from "../reactive/facility.state"

export default defineComponent({
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { findAllFacilities, facilities } = useAllFacilities()

    onMounted(() => {
      setTitle(null)
      setHasBackButton(false)
      findAllFacilities()
    })

    return {
      facilities,
      navigateToFacilityDetail: (id: string) =>
        root.$router.push({ name: "facility.detail", params: { id } }),
    }
  },
})
</script>

<style lang="scss">
@import "../../styles/utilities/all";
.lead {
  padding: 0 12px;
  p.motto {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 5px;
  }
  p.payments {
    margin-top: 20px;
    margin-bottom: 6px;
  }
}
section.card-address > .v-card__subtitle {
  padding: 0 16px !important;
}
.payment-methods {
  max-width: 200px;
}
</style>
