<template>
  <section>
    <Title text="Ausstattung" />
    <section class="categories">
      <div class="category">
        <v-img :src="require('@/assets/camera.svg')"></v-img>
        <Content>Kameraüberwacht</Content>
      </div>
      <div class="category">
        <v-img :src="require('@/assets/wheelchair.svg')"></v-img>
        <Content>Rollstuhlzugänglich</Content>
      </div>
      <div class="category">
        <v-img :src="require('@/assets/bathroom.svg')"></v-img>
        <Content>Kein WC</Content>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Title from "@/app/components/common/Title.vue"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Title,
    Content,
  },
  props: {
    image: String,
  },
})
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .category {
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    margin-bottom: 8px;

    p {
      flex: 1;
      padding-left: 15px;
      margin: 0 !important;
    }

    .v-image {
      max-width: 28px;
    }
  }
}
</style>
