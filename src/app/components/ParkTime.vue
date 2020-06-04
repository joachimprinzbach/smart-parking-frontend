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
import { dateDiffToString, diffFrom } from "@/app/utils/date.util"

export default defineComponent({
  props: {
    startedAt: Date,
    stoppedAt: Date,
  },
  setup: (props: { startedAt: Date; stoppedAt: Date }, { root }) => {
    const timeString = ref<string>("")

    const timeInterval = setInterval(() => calcNewTimeString(), 5000)

    function calcNewTimeString() {
      timeString.value = dateDiffToString(
        root,
        diffFrom(props.startedAt, props.stoppedAt || new Date()),
      )
    }

    onMounted(() => calcNewTimeString())
    onUnmounted(() => clearInterval(timeInterval))

    return {
      timeString,
    }
  },
})
</script>
