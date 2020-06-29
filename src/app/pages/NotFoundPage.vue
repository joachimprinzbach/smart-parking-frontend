<template>
  <v-container>
    <ErrorSection
      image="404.svg"
      :title="$t('notFound.title')"
      :subtitle="$t('notFound.subtitle')"
      :content="$t('notFound.content')"
      :action="$t('notFound.linkToHome')"
      @click="navigateToHome()"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import ErrorSection from "@/app/components/common/ErrorSection.vue"

export default defineComponent({
  components: {
    ErrorSection,
  },
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
