<template>
  <div class="box">
    <p v-html="joinTexts(hint)"></p>
    <hr />
    <table>
      <tr>
        <th>{{ $t("booking.detail.currentParkingTime") }}</th>
        <td><ParkTime :startedAt="startedAt" /></td>
      </tr>
      <tr>
        <th>{{ $t("booking.detail.currentParkingCosts") }}</th>
        <td><ParkPrice :startedAt="startedAt" /></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { joinTexts } from "@/app/filters/join-texts.filter"
import ParkTime from "@/app/components/booking/ParkTime.vue"
import ParkPrice from "@/app/components/booking/ParkPrice.vue"

export default defineComponent({
  components: { ParkTime, ParkPrice },
  props: {
    startedAt: Date,
    hint: Array,
  },
  setup: () => {
    return { joinTexts }
  },
})
</script>
