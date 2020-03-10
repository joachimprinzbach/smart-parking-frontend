<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { setHasBackButton } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {

    onMounted(() => {
      setHasBackButton(true)
    })

    return {}
  },
})
</script>