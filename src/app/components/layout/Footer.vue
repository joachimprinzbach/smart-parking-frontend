<template>
  <v-footer dark padless color="primary" style="margin-top: 25px">
    <v-row justify="center" no-gutters>
      <router-link :to="{ name: 'about' }">
        <v-btn color="white" dark text class="my-2">{{
          $t("about.appBarTitle")
        }}</v-btn>
      </router-link>
      <router-link :to="{ name: 'contact' }">
        <v-btn color="white" dark text class="my-2">{{
          $t("contact.appBarTitle")
        }}</v-btn>
      </router-link>
      <router-link :to="{ name: 'terms' }">
        <v-btn color="white" dark text class="my-2">{{
          $t("terms.appBarTitle")
        }}</v-btn>
      </router-link>
      <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Smart Parking</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({})
</script>
