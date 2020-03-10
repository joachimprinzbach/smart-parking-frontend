<template>
  <v-app>
    <AppBar />

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppBar from '@/app/components/AppBar.vue'

export default defineComponent({
  components: {
    AppBar,
  },
  setup(props, { root }) {
    return {
      navigateToAbout: () => root.$router.push({ name: 'about' }),
    }
  },
})
</script>
