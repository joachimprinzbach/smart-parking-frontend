<template>
  <div class="booking-payment">
    <h1>This is an booking payment page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle('booking.payment.appBarTitle')
      setHasBackButton(true)
    })

    return {}
  },
})
</script>