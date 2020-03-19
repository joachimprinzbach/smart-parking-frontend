<template>
  <v-container fluid class="about">
    <p v-html="$t('about.content')"></p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle("about.appBarTitle")
      setHasBackButton(true)
    })

    return {}
  },
})
</script>
