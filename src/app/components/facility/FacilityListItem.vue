<template>
  <v-row dense>
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
                class="has-text-success text-subtitle-1"
                :class="facility.free === 0 ? 'red--text' : ''"
                v-text="
                  $t('facility.detail.slots', {
                    amount: facility.free,
                  })
                "
              ></v-card-subtitle>
              <section class="card-address">
                <v-card-subtitle
                  class="text-body-2"
                  v-text="
                    facility.address.street +
                      ' ' +
                      facility.address.streetNumber
                  "
                ></v-card-subtitle>
                <v-card-subtitle
                  class="text-body-2"
                  v-text="
                    facility.address.postalCode + ' ' + facility.address.city
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
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { FacilityModel } from "@/app/models/facility.model"

export default defineComponent({
  props: {
    facility: {
      type: Object as () => FacilityModel,
      required: true,
    },
  },
  setup(props, { root }) {
    function navigateToFacilityDetail() {
      root.$router.push({
        name: "facility.detail",
        params: { id: props.facility.id },
      })
    }

    return {
      navigateToFacilityDetail,
    }
  },
})
</script>

<style lang="scss">
.card-address {
  .v-card__subtitle {
    padding-top: 0;
  }
  .v-card__subtitle:first-child {
    padding-bottom: 0;
  }
}
</style>
