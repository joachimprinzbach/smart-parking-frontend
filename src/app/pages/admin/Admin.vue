<template>
  <v-app>
    <AdminAppBar />

    <v-content>
      <router-view />
    </v-content>
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
