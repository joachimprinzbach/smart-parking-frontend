<template>
  <section>
    <Title text="Datenschutz" />
    <Content>
      Mit der Nutzung der Dienstleistung der Basler akzeptiert der Nutzer die
      Datenschutzbestimmungen für Mietverhältnisse
      https://www.baloise.ch/de/ueber-uns/datenverarbeitung-mietverhaeltnisse.html
      und bestätigt diese gelesen zu haben.
    </Content>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Title from "@/app/components/common/Title.vue"
import Content from "@/app/components/common/Content.vue"

export default defineComponent({
  components: {
    Title,
    Content,
  },
})
</script>
