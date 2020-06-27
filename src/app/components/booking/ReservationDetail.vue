<template>
  <section>
    <p class="text-subtitle-1" style="margin-bottom: 8px">
      {{ $t("booking.detail.gates.title") }}
    </p>
    <v-btn block color="primary" @click="openDialog()">{{
      $t("booking.detail.gates.main.label")
    }}</v-btn>
    <Hint :content="$t('booking.detail.openMainGateForTheFirstTimeHint')" />
    <div class="box">
      <p class="subtitle-1">
        <strong>{{ $t("booking.reservation.box.title") }}</strong>
      </p>
      <hr />
      <table>
        <tr>
          <th class="body-1">{{ $t("booking.reservation.box.time") }}</th>
          <td class="body-1">
            <ReservationTime :verifiedAt="booking.verifiedAt" />
          </td>
        </tr>
      </table>
    </div>
    <Hint :content="$t('booking.reservation.box.hint')" />

    <v-btn block color="error" outlined @click="cancel()">{{
      $t("booking.reservation.cancel.label")
    }}</v-btn>
    <Hint :content="$t('booking.reservation.cancel.hint')" />

    <v-dialog v-model="isConfirmDialogOpen" persistent>
      <v-card>
        <v-card-title class="headline">{{
          $t("booking.reservation.dialog.title")
        }}</v-card-title>
        <v-card-text>
          <v-row justify="space-around">
            <v-col class="d-flex align-center" cols="2"
              ><v-icon large>mdi-wallet</v-icon></v-col
            >
            <v-col
              cols="10"
              v-html="$t('booking.reservation.dialog.text.money')"
            ></v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col class="d-flex align-center" cols="2"
              ><v-icon large>mdi-clock-outline</v-icon></v-col
            >
            <v-col
              cols="10"
              v-html="$t('booking.reservation.dialog.text.time')"
            ></v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="closeDialog()">{{
            $t("booking.reservation.dialog.disagree")
          }}</v-btn>
          <v-btn color="blue darken-1" text @click="openMainGate()">{{
            $t("booking.reservation.dialog.agree")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import { useBooking } from "@/app/reactive/booking.state"
import ReservationTime from "@/app/components/booking/ReservationTime.vue"
import Hint from "@/app/components/common/Hint.vue"

export default defineComponent({
  components: {
    ReservationTime,
    Hint,
  },
  props: {
    facility: Object,
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
      openMainGate: () => {
        closeDialog()
        emit("openGate", "main")
      },
      cancel: () => {
        closeDialog()
        emit("cancel")
      },
    }
  },
})
</script>
