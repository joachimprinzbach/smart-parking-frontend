<template>
  <v-container class="contact">
    <p class="body-1" v-html="$t('contact.content')"></p>

    <v-divider></v-divider>

    <v-list>
      <v-list-item href="mailto:smart_parking@baloise.ch">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="body-1"
            >smart_parking@baloise.ch</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item href="tel:+41 58 285 73 76">
        <v-list-item-icon>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="body-1">+41 58 285 73 76</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
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
      AppBar.setTitle("contact.appBarTitle")
      AppBar.setHasBackButton(true)
      Browser.setHasUnsavedData(false)
    })

    return {}
  },
})
</script>
