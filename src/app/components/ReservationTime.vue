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
    createdAt: Date,
  },
  setup: (props: { createdAt: Date }) => {
    const timeString = ref<string>("")
    const maxTimeInMinutes = 60

    const calcNewTimeString = (createdAt: Date) => {
      if (createdAt) {
        const diffMs = Date.now() - createdAt.getTime()
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000)
        const countdownInMins = maxTimeInMinutes - diffMins
        timeString.value = `${countdownInMins > 0 ? countdownInMins : 0} Min`
      } else {
        timeString.value = ""
      }
    }

    onMounted(() => calcNewTimeString(props.createdAt))

    const timeInterval = setInterval(
      () => calcNewTimeString(props.createdAt),
      5000,
    )

    onUnmounted(() => clearInterval(timeInterval))

    return {
      timeString,
      // time: computed(() => {
      //   calcNewTimeString(props.createdAt)
      //   return timeString.value
      // }),
    }
  },
})
</script>
