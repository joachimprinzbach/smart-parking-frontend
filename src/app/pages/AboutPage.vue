<template>
  <v-container class="about">
    <Content v-html="$t('about.content')" />
    <br />
    <Content v-html="$t('about.bets')" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: { Content },
  setup() {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    onMounted(() => {
      AppBar.setTitle("about.appBarTitle")
      AppBar.setHasBackButton(true)
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
