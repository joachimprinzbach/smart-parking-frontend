<template>
  <section>
    <Hint large :content="$t('facility.detail.reserve.hint')" />

    <br />

    <router-link :to="{ name: 'terms' }" class="body-2">
      <strong>{{ $t("booking.form.agb") }}</strong>
    </router-link>

    <br />
    <br />

    <v-btn block color="primary" @click="submit()">{{
      $t("booking.form.confirmation.action")
    }}</v-btn>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Hint from "@/app/components/Hint.vue"

export default defineComponent({
  components: { Hint },
  setup(props, { emit }) {
    function submit() {
      emit("submit", true)
    }

    return {
      submit,
    }
  },
})
</script>
