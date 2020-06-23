<template>
  <div class="home">
    <section class="lead has-background-primary has-text-white">
      <v-container>
        <h3 class="title">{{ $t("home.first") }}</h3>
        <h3 class="title">{{ $t("home.second") }}</h3>
        <h3 class="title">{{ $t("home.third") }}</h3>
        <v-img
          class="payment-methods"
          src="../../assets/payment-methods.svg"
        ></v-img>
      </v-container>
    </section>
    <v-container>
      <v-skeleton-loader class="mx-auto" type="image" :loading="isPending">
        <br />
        <v-row dense v-for="facility in facilities" :key="facility.id">
          <v-col cols="12">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card
                @click="navigateToFacilityDetail(facility.id)"
                style="width: 100%;"
              >
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
                          amount: facility.free,
                        })
                      "
                    ></v-card-subtitle>
                    <section class="card-address">
                      <v-card-subtitle
                        class="body-2"
                        v-text="
                          facility.address.street +
                            ' ' +
                            facility.address.streetNumber
                        "
                      ></v-card-subtitle>
                      <v-card-subtitle
                        class="body-2"
                        v-text="
                          facility.address.postalCode +
                            ' ' +
                            facility.address.city
                        "
                      ></v-card-subtitle>
                    </section>
                  </div>
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="facility.thumbnail"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-skeleton-loader>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useAllFacilities } from "@/app/reactive/facility.state"
import { useBrowser } from "@/app/reactive/browser.state"

export default defineComponent({
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()
    const { findAllFacilities, facilities, isPending } = useAllFacilities()

    onMounted(() => {
      AppBar.setTitle(null)
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
      findAllFacilities()
    })

    function navigateToFacilityDetail(id: string) {
      root.$router.push({ name: "facility.detail", params: { id } })
    }

    return {
      isPending,
      facilities,
      navigateToFacilityDetail,
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
  h3.title:first-child {
    margin-top: 15px;
  }
  h3 {
    margin-bottom: 5px;
  }
  p.payments {
    margin-top: 20px;
    margin-bottom: 6px;
  }
  p > a {
    color: white;
  }
}
section.card-address > .v-card__subtitle {
  padding: 0 16px !important;
}
.payment-methods {
  max-width: 120px;
  margin-left: 25px;
  margin-bottom: 15px;
}
</style>
