<template>
  <section style="margin-bottom: 16px">
    <h3 class="title">{{ $t("facility.detail.prices") }}</h3>
    <table>
      <tr>
        <td class="body-2" style="padding-right: 30px">2 CHF</td>
        <td class="body-2">pro Stunde</td>
      </tr>
      <tr>
        <td class="body-2">10 CHF</td>
        <td class="body-2">max pro Tag</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
