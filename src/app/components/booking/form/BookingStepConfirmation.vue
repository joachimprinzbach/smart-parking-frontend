<template>
  <section>
    <Hint
      :content="
        isBooking
          ? $t('booking.form.confirmation.booking.hint')
          : $t('booking.form.confirmation.reservation.hint')
      "
    />

    <br />

    <router-link :to="{ name: 'terms' }" class="text-body-2" target="_blank">
      <strong>{{ $t("booking.form.agb") }}</strong>
    </router-link>

    <br />
    <br />

    <v-btn block color="primary" @click="submit()">{{
      isBooking
        ? $t("booking.form.confirmation.booking.action")
        : $t("booking.form.confirmation.reservation.action")
    }}</v-btn>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Hint from "@/app/components/common/Hint.vue"

export default defineComponent({
  components: { Hint },
  props: {
    isBooking: {
      type: Boolean,
      default: false,
    },
  },
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
