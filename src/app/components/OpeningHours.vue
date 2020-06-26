<template>
  <section>
    <SectionHeading :text="$t('facility.detail.openingHours')" />
    <p class="body-2" v-html="joinTexts(text)"></p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { joinTexts } from "@/app/filters/join-texts.filter"
import SectionHeading from "@/app/components/SectionHeading.vue"

export default defineComponent({
  components: {
    SectionHeading,
  },
  props: {
    text: Array,
  },
  setup() {
    return { joinTexts }
  },
})
</script>
