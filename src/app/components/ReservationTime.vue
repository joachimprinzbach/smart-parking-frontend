<template>
  <span>{{ timeString }}</span>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onUnmounted,
  onMounted,
} from "@vue/composition-api"

export default defineComponent({
  props: {
    verifiedAt: Date,
  },
  setup: (props: { verifiedAt: Date }) => {
    const timeString = ref<string>("")
    const maxTimeInMinutes = 60

    const calcNewTimeString = (verifiedAt: Date) => {
      if (verifiedAt) {
        const diffMs = Date.now() - verifiedAt.getTime()
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
        const countdownInMins = maxTimeInMinutes - diffMins
        timeString.value = `${countdownInMins > 0 ? countdownInMins : 0} Min`
      } else {
        timeString.value = ""
      }
    }

    onMounted(() => calcNewTimeString(props.verifiedAt))

    const timeInterval = setInterval(
      () => calcNewTimeString(props.verifiedAt),
      5000,
    )

    onUnmounted(() => clearInterval(timeInterval))

    return {
      timeString,
    }
  },
})
</script>
