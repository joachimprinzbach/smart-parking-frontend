<template>
  <section>
    <h3>{{ $t('object.detail.prices') }}</h3>
    <table>
      <tr>
        <td style="padding-right: 30px">2 CHF</td>
        <td>pro Stunde</td>
      </tr>
      <tr>
        <td>10 CHF</td>
        <td>max pro Tag</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>