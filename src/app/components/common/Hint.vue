<template>
  <Content :small="!large" v-html="content"></Content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Content,
  },
  props: {
    content: String,
    large: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../../../styles/utilities/all";

p {
  color: $gray;
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
