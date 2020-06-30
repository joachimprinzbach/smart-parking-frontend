<template>
  <v-row dense>
    <v-col cols="12" v-if="!loading && facility">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-card style="width: 100%;">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="facility.name"
              ></v-card-title>
              <v-card-subtitle
                class="subtitle-1"
                v-text="
                  $t('admin.facility.capacity', {
                    free: facility.free,
                    capacity: facility.capacity,
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
          <v-card-actions style="padding-left: 15px; padding-bottom: 15px;">
            <v-btn color="primary" @click="navigateBack()">
              {{ $t("admin.navigate.back") }}
            </v-btn>
            <div class="divider"></div>

            <v-btn
              v-for="gate in gates"
              :key="gate.id"
              :loading="isPending"
              :disabled="isPending"
              @click="openGate(gate.id)"
              color="primary"
              outlined
              style="margin-left: 15px;"
            >
              {{ $t("booking.detail.gates." + gate.id + ".label") }}
            </v-btn>

            <v-snackbar color="success" v-model="showSuccessSnackbar">
              {{ $t("admin.facility.openGate.success") }}
            </v-snackbar>
            <v-snackbar color="error" v-model="showErrorSnackbar">
              {{ $t("admin.facility.openGate.failed") }}
            </v-snackbar>
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import { FacilityModel } from "../../models/facility.model"
import { api } from "../../api"
import { removeAccessToken } from "../../reactive/admin.state"

export default defineComponent({
  props: {
    facility: {
      type: Object as () => FacilityModel,
    },
    gates: {
      type: Array,
      default: [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { root }) {
    const showSuccessSnackbar = ref(false)
    const showErrorSnackbar = ref(false)
    const isPending = ref(false)

    function navigateBack() {
      root.$router.back()
    }

    async function openGate(gateId: string) {
      if (props.facility && props.facility.id) {
        isPending.value = true
        showSuccessSnackbar.value = false
        showErrorSnackbar.value = false
        const response = await api.admin.openGate(props.facility.id, gateId)
        if (response.wasSuccessful) {
          showSuccessSnackbar.value = true
        } else {
          if (response.status === 401) {
            removeAccessToken()
            root.$router.push({ name: "admin.login" })
          }
          showErrorSnackbar.value = true
        }
        isPending.value = false
      }
    }

    return {
      openGate,
      navigateBack,
      showSuccessSnackbar,
      showErrorSnackbar,
      isPending,
    }
  },
})
</script>

<style lang="scss" scoped>
.divider {
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: inline-flex;
  flex: 0 0 auto;
}

.v-card__actions > .v-btn.v-btn {
  padding: 0 16px;
}
</style>
