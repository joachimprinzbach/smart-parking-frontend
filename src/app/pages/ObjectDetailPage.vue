<template>
  <div class="object-detail">
    <h1>This is an object detail page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle('object.detail.appBarTitle')
      setHasBackButton(true)
    })

    return {}
  },
})
</script>