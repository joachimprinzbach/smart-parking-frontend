<template>
  <v-app>
    <AdminAppBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "@vue/composition-api"
import AdminAppBar from "@/app/components/admin/AdminAppBar.vue"
import { useBrowser } from "../../reactive/browser.state"

export default defineComponent({
  components: {
    AdminAppBar,
  },
  setup() {
    const Browser = useBrowser()

    onBeforeMount(() => {
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
