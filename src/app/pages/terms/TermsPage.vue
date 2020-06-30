<template>
  <section>
    <v-tabs grow background-color="primary" dark>
      <v-tab :to="{ name: 'terms' }">
        {{ $t("terms.conditions.nav") }}
      </v-tab>
      <v-tab :to="{ name: 'terms.privacy' }">
        {{ $t("terms.privacy.nav") }}
      </v-tab>
    </v-tabs>
    <v-container>
      <router-view />
    </v-container>

    <!-- <v-container class="terms">
      
    </v-container> -->
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"

export default defineComponent({
  setup() {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    onMounted(() => {
      AppBar.setTitle("terms.appBarTitle")
      AppBar.setHasBackButton(true)
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
