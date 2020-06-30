<template>
  <section style="margin-bottom: 16px">
    <Title :text="$t('facility.detail.prices')" />
    <table>
      <tr>
        <td class="text-body-1" style="padding-right: 30px">2 CHF</td>
        <td class="text-body-1">pro Stunde</td>
      </tr>
      <tr>
        <td class="text-body-1">10 CHF</td>
        <td class="text-body-1">max pro Tag</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Title from "@/app/components/common/Title.vue"

export default defineComponent({
  components: {
    Title,
  },
})
</script>
