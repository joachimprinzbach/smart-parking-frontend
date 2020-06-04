<template>
  <v-container>
    <section class="not-found">
      <v-img max-width="320" :src="require('../../assets/barrier.svg')" />
      <h1 class="display-2">{{ $t("notFound.title") }}</h1>
      <h2 class="title">{{ $t("notFound.subtitle") }}</h2>
      <p v-html="$t('notFound.content')"></p>
      <v-btn @click="navigateToHome">{{ $t("notFound.linkToHome") }}</v-btn>
    </section>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"

export default defineComponent({
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    const navigateToHome = () => root.$router.replace({ name: "home" })

    onMounted(() => {
      AppBar.setTitle(null)
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
    })

    return { navigateToHome }
  },
})
</script>

<style lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .v-image {
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    margin-top: 50px;
    text-align: center;
  }

  h2,
  p {
    margin-top: 25px;
    text-align: center;
  }

  p {
    margin-bottom: 25px;
    max-width: 480px;
  }
}
</style>
