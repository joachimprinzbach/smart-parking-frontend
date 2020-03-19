<template>
  <v-app>
    <AppBar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import AppBar from "@/app/components/AppBar.vue"

export default defineComponent({
  components: {
    AppBar,
  },
  setup(props, { root }) {
    return {
      navigateToAbout: () => root.$router.push({ name: "about" }),
    }
  },
})
</script>
