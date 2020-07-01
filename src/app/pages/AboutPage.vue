<template>
  <v-container class="about">
    <v-img
      :src="require('@/assets/logo-typo.svg')"
      max-width="200"
      style="margin-top: 8px;"
    ></v-img>
    <br />
    <Content v-html="$t('about.content')" />
    <v-divider />
    <Content v-html="$t('about.bets')" />
    <v-divider />
    Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
      >Freepik</a
    >
    from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    <br />
    Icons made by
    <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons"
      >Roundicons</a
    >
    from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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
