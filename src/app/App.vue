<template>
  <v-app>
    <v-container v-if="!hasNetwork">
      <ErrorSection
        :title="$t('maintenance.title')"
        :subtitle="$t('maintenance.subtitle')"
        :content="$t('maintenance.content')"
        :action="$t('maintenance.refresh')"
        @click="refresh()"
      />
    </v-container>
    <router-view v-if="hasNetwork" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useBrowser } from "@/app/reactive/browser.state"
import ErrorSection from "@/app/components/common/ErrorSection.vue"

export default defineComponent({
  components: {
    ErrorSection,
  },
  setup() {
    const { hasNetwork } = useBrowser()

    function refresh() {
      location.reload()
    }

    return { hasNetwork, refresh }
  },
})
</script>
