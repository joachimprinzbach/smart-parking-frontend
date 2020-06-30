<template>
  <section class="booking-detail">
    <v-divider />
    <div class="gate-button" v-for="gate in gates" :key="gate.id">
      <Subtitle>
        {{ $t("booking.detail.gates." + gate.id + ".title") }}
      </Subtitle>
      <v-btn block color="primary" outlined @click="openGate(gate.id)">{{
        $t("booking.detail.gates." + gate.id + ".label")
      }}</v-btn>
      <Hint :content="$t('booking.detail.gates.' + gate.id + '.hint')" />
      <v-divider />
    </div>

    <BookingDetailInfoBox
      :hint="facility.parkingHint.de"
      :startedAt="booking.startedAt"
    />
    <br />
    <v-btn block color="primary" @click="openDialog()">{{
      $t("booking.detail.finish.label")
    }}</v-btn>
    <Hint :content="$t('booking.detail.finish.hint')" />

    <v-dialog v-model="isConfirmDialogOpen" persistent>
      <v-card>
        <v-card-title class="headline">{{
          $t("booking.detail.dialog.title")
        }}</v-card-title>
        <v-card-text v-html="$t('booking.detail.dialog.text')"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="closeDialog()">{{
            $t("booking.detail.dialog.disagree")
          }}</v-btn>
          <v-btn color="blue darken-1" text @click="stop()">{{
            $t("booking.detail.dialog.agree")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api"
import { GateModel } from "@/app/models/gate.model"
import { FacilityModel } from "@/app/models/facility.model"
import { BookingModel } from "@/app/models/booking.model"
import { api } from "@/app/api"
import Hint from "@/app/components/common/Hint.vue"
import Subtitle from "@/app/components/common/Subtitle.vue"
import BookingDetailInfoBox from "@/app/components/booking/BookingDetailInfoBox.vue"

export default defineComponent({
  components: { BookingDetailInfoBox, Hint, Subtitle },
  props: {
    facility: {
      type: Object as () => FacilityModel,
      required: true,
    },
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isConfirmDialogOpen = ref(false)
    const gates = ref<GateModel[]>([])

    const closeDialog = () => (isConfirmDialogOpen.value = false)
    const openDialog = () => (isConfirmDialogOpen.value = true)

    onMounted(async () => {
      const loadedGates = await api.findAllGates(props.booking.facilityId)
      if (loadedGates.wasSuccessful && loadedGates.data) {
        gates.value = loadedGates.data
      }
    })

    return {
      gates,
      isConfirmDialogOpen,
      openDialog,
      closeDialog,
      stop: () => {
        closeDialog()
        emit("stop")
      },
      openGate: (gateId: string) => emit("openGate", gateId),
    }
  },
})
</script>

<style lang="scss" scoped>
.booking-detail {
  margin-top: 5px;
}
.gate-button {
  margin-bottom: 15px;
}
</style>
