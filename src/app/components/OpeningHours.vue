<template>
  <section>
    <h3 class="title">{{ $t("facility.detail.openingHours") }}</h3>
    <p class="body-2" v-html="joinTexts(text)"></p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { joinTexts } from "@/app/filters/join-texts.filter"

export default defineComponent({
  props: {
    text: Array,
  },
  setup() {
    return { joinTexts }
  },
})
</script>
