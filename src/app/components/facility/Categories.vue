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
        <v-img class="no" :src="require('@/assets/restroom.svg')"></v-img>
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
@import "../../../styles/utilities/all";

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

    .v-image.no:after {
      content: "";
      position: absolute;
      top: 12px;
      left: 0px;
      width: 28px;
      height: 5px;
      background: $error;
      border-radius: 20px;
      transform: rotate(45deg);
    }
  }
}
</style>
