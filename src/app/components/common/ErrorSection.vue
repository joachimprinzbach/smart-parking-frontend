<template>
  <section class="error-section">
    <v-img max-width="320" :src="require(`@/assets/${image}`)" />
    <h1 class="display-2" v-html="title"></h1>
    <Subtitle v-html="subtitle"></Subtitle>
    <Content v-html="content"></Content>
    <v-btn outlined color="primary" @click="clicked()">{{ action }}</v-btn>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Content from "@/app/components/common/Content.vue"
import Subtitle from "@/app/components/common/Subtitle.vue"

export default defineComponent({
  components: {
    Subtitle,
    Content,
  },
  props: {
    image: {
      type: String,
      default: "barrier.svg",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    function clicked() {
      emit("click")
    }

    return { clicked }
  },
})
</script>

<style lang="scss">
section.error-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .v-image {
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    margin-top: 50px;
    text-align: center;
  }

  h2,
  p {
    margin-top: 25px;
    text-align: center;
  }

  p {
    margin-bottom: 25px;
    max-width: 480px;
  }
}
</style>
