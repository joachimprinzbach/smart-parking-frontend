<template>
  <v-row>
    <v-col cols="4">
      <strong v-text="$t(label)"></strong>
    </v-col>
    <v-col><slot>{{ value || "-" }}</slot></v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    label: String,
    value: String,
  },
})
</script>
