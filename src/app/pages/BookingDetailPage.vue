<template>
  <v-container fluid class="booking-detail">
    <h1>This is an booking detail page</h1>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle('booking.detail.appBarTitle')
      setHasBackButton(true)
    })

    return {}
  },
})
</script>