<template>
  <v-container>
    <TutorialCarousel />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import TutorialCarousel from "@/app/components/tutorial/TutorialCarousel.vue"

export default defineComponent({
  components: { TutorialCarousel },
  setup() {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    onMounted(() => {
      AppBar.setTitle("")
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
