<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import AppBar from "@/app/components/layout/AppBar.vue"

export default defineComponent({
  components: {
    AppBar,
  },
})
</script>
