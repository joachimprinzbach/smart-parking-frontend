<template>
  <section>
    <Title :text="$t('facility.detail.openingHours')" />
    <Content v-html="joinTexts(text)"></Content>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { joinTexts } from "@/app/filters/join-texts.filter"
import Title from "@/app/components/common/Title.vue"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Title,
    Content,
  },
  props: {
    text: Array,
  },
  setup() {
    return { joinTexts }
  },
})
</script>
