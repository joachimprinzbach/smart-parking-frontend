<template>
  <section>
    <v-btn block color="primary" outlined @click="openGate()">{{
      $t("booking.detail.openGate.label")
    }}</v-btn>
    <br />
    <v-btn block color="primary" outlined @click="openDoor()">{{
      $t("booking.detail.openDoor.label")
    }}</v-btn>
    <Hint :content="$t('booking.detail.openDoor.hint')" />
    <BookingDetailInfoBox
      :hint="building.parkingHint.de"
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
import { defineComponent, ref } from "@vue/composition-api"
import { useBooking } from "../reactive/booking.state"
import BookingDetailInfoBox from "./BookingDetailInfoBox.vue"
import Hint from "./Hint.vue"

export default defineComponent({
  components: { BookingDetailInfoBox, Hint },
  props: {
    building: Object,
  },
  setup(props, { emit }) {
    const { booking } = useBooking()
    const isConfirmDialogOpen = ref(false)

    const closeDialog = () => (isConfirmDialogOpen.value = false)
    const openDialog = () => (isConfirmDialogOpen.value = true)

    return {
      booking,
      isConfirmDialogOpen,
      openDialog,
      closeDialog,
      stop: () => {
        closeDialog()
        emit("stop")
      },
      openDoor: () => emit("openDoor"),
      openGate: () => emit("openGate"),
    }
  },
})
</script>
