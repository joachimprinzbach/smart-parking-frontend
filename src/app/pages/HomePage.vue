<template>
  <div class="home">
    <v-container>
      <Title :text="$t('home.title')" style="margin-bottom: 18px" />
      <FacilityList />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import Title from "@/app/components/common/Title.vue"
import Banner from "@/app/components/Banner.vue"
import FacilityList from "@/app/components/facility/FacilityList.vue"

export default defineComponent({
  components: {
    Banner,
    Title,
    FacilityList,
  },
  setup() {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    onMounted(() => {
      AppBar.setTitle(null)
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
