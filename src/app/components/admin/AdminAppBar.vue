<template>
  <v-app-bar app absolute flat color="error" dark>
    <v-toolbar-title>{{ $t("admin.title") }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="isAuthenticated" outlined dark @click="logout()">
      {{ $t("admin.logout") }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { removeAccessToken, isAuthenticated } from "../../reactive/admin.state"

export default defineComponent({
  setup(props, { root }) {
    async function logout() {
      removeAccessToken()
      root.$router.replace({ name: "home" })
    }
    return { logout, isAuthenticated }
  },
})
</script>
