<template>
  <v-row dense>
    <v-col cols="12">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-card
          @click="navigateToFacilityDetail(facility.id)"
          style="width: 100%;"
        >
          <v-img
            class="white--text align-end"
            height="160px"
            :src="facility.thumbnail"
          >
          </v-img>
          <v-card-title v-text="facility.name"></v-card-title>
          <v-card-subtitle
            class="pb-2 text-subtitle-2"
            :class="facility.free === 0 ? 'red--text' : 'has-text-success'"
            v-text="
              $t('facility.detail.slots', {
                amount: facility.free,
              })
            "
          ></v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              {{
                facility.address.street + " " + facility.address.streetNumber
              }}
            </div>
            <div>
              {{ facility.address.postalCode + " " + facility.address.city }}
            </div>
          </v-card-text>
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
