<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { setHasBackButton } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    onMounted(() => {
      setHasBackButton(false)
    })

    return {}
  },
})
</script>
