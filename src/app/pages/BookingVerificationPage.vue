<template>
  <v-container fluid class="booking-verification">
    <h1>This is an booking sms page</h1>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle('booking.verification.appBarTitle')
      setHasBackButton(true)
    })

    return {}
  },
})
</script>