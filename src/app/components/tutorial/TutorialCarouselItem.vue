<template>
  <v-carousel-item>
    <v-sheet color="white" light height="100%" tile>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-img
            :src="require(`@/assets/${image}`)"
            contain
            height="180px"
          ></v-img>
        </v-col>
        <v-col cols="12" align="center" justify="center">
          <h1 class="text-h4" v-html="title"></h1>
          <h2 class="text-subtitle-1" v-html="text"></h2>
        </v-col>
        <v-col cols="12" align="center" justify="center">
          <v-btn color="primary" style="min-width: 200px" @click="next()">
            {{ last ? $t("tutorial.done") : $t("tutorial.next") }}
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          align="center"
          justify="center"
          style="margin-top: 15px;"
        >
          <v-btn text color="primary" @click="skip()" v-if="!last">
            {{ $t("tutorial.skip") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: { Content },
  props: {
    title: String,
    text: String,
    image: String,
    last: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    return {
      next: () => emit("next"),
      skip: () => emit("skip"),
    }
  },
})
</script>

<style lang="scss" scoped>
h1.text-h2 {
  font-size: 3rem !important;
}
h2.text-h5 {
  font-size: 1.3rem !important;
}
</style>
