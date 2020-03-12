<template>
  <v-app-bar app absolute flat color="primary" dark>
    <v-btn icon v-if="hasBackButton" @click="navigateBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-img
      v-if="!hasTitle()"
      class="mx-2"
      :src="require('../../assets/logo.svg')"
      max-height="40"
      max-width="250"
      contain
    ></v-img>

    <v-toolbar-title v-if="hasTitle()">{{ $t(getTitle()) }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="navigateToAbout">
      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup(props, { root }) {
    const { hasBackButton, hasTitle, getTitle } = useAppBar()
    return {
      hasTitle,
      getTitle,
      hasBackButton: computed(() => hasBackButton()),
      navigateToAbout: () => root.$router.push({ name: 'about' }),
      navigateBack: () => root.$router.back(),
    }
  },
})
</script>
