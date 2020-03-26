<template>
  <span>{{ parkPriceString }}</span>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onUnmounted,
  onMounted,
} from "@vue/composition-api"
import { calculatePrice } from "../utils/price-calculator.util"

export default defineComponent({
  props: {
    startedAt: Date,
    stoppedAt: Date,
  },
  setup: (props: { startedAt: Date; stoppedAt: Date }) => {
    const parkPriceString = ref<string>("")

    const calcNewParkPriceString = () =>
      (parkPriceString.value = calculatePrice(props.startedAt, props.stoppedAt))

    onMounted(() => calcNewParkPriceString())

    const timeInterval = setInterval(() => calcNewParkPriceString(), 5000)

    onUnmounted(() => clearInterval(timeInterval))

    return { parkPriceString }
  },
})
</script>
