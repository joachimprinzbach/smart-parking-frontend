<template>
  <v-container class="about">
    <p class="body-1" v-html="$t('about.content')"></p>
    <br />
    <p class="body-1" v-html="$t('home.bets')"></p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBrowser } from "../reactive/browser.state"

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()
    const { setHasUnsavedData } = useBrowser()

    onMounted(() => {
      setTitle("about.appBarTitle")
      setHasBackButton(true)
      setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
