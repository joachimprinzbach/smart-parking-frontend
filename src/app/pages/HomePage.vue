<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle(null)
      setHasBackButton(false)
    })

    return {}
  },
})
</script>
