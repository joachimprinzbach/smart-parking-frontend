<template>
  <section>
    <Content v-html="$t('booking.confirmation.feedback.text')"></Content>
    <v-btn block color="primary" outlined target="_blank" :href="feedbackLink">
      {{ $t("booking.confirmation.feedback.button") }}
    </v-btn>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Content,
  },
  setup() {
    const feedbackLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSdlnDWce1kbgVeoT_x-qBmWjXlsgR9CqTuCAIYWf41WnKQJng/viewform"

    return {
      feedbackLink,
    }
  },
})
</script>
