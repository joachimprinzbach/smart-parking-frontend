<template>
  <section>
    <v-alert v-model="hasError" dismissible type="error">
      <p class="subtitle-1">{{ $t("booking.verification.alert.title") }}</p>
      <p class="body-2" v-html="$t('booking.verification.alert.text')"></p>
      <v-btn color="white" light @click="retry">{{
        $t("booking.verification.alert.button")
      }}</v-btn>
    </v-alert>

    <p class="body-1">{{ $t("booking.verification.explanation") }}</p>

    <v-text-field
      maxlength="6"
      filled
      inputmode="numeric"
      pattern="[0-9]*"
      autocomplete="one-time-code"
      type="number"
      ref="textField"
      v-model="verificationCode"
      :rules="verificationFieldRules"
      :label="$t('booking.verification.code.label')"
      :loading="loading"
      :disabled="loading"
      @keypress.enter="prevent($event)"
      @keyup="submit($event)"
    ></v-text-field>

    <Hint large :content="$t('booking.verification.mobile.hint')" />

    <v-snackbar
      top
      v-model="hasSuccessSnack"
      :multi-line="'multi-line'"
      :timeout="6000"
    >
      {{ $t("booking.verification.snackbar.text") }}
      <v-btn dark color="blue" text @click="hasSuccessSnack = false">
        {{ $t("common.button.close") }}
      </v-btn>
    </v-snackbar>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  watchEffect,
  ref,
  computed,
} from "@vue/composition-api"
import { useVerification } from "@/app/reactive/form/verification.reactive"
import Hint from "@/app/components/Hint.vue"
import { api } from "../../../api"
import { BookingModel } from "../../../models/booking.model"

export default defineComponent({
  components: { Hint },
  props: {
    value: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
  },
  setup(props, { root, emit }) {
    const { verificationCode, verificationFieldRules } = useVerification(root)
    const textField = ref<{ valid: boolean; focus: () => undefined }>(null)
    const hasSuccessSnack = ref(false)
    const hasError = ref(false)

    const isValid = computed(() =>
      textField.value ? textField.value.valid : false,
    )

    watchEffect(() => {
      emit("input", verificationCode.value)
    })

    function submit() {
      if (verificationCode.value.length === 6) {
        emit("submit", verificationCode.value)
      }
    }

    function focus() {
      if (textField.value) {
        textField.value.focus()
      }
    }

    function prevent(event: CustomEvent) {
      event.preventDefault()
      event.stopPropagation()
    }

    async function retry() {
      hasError.value = false
      await api.retryVerification(props.booking.id)
      hasSuccessSnack.value = true
      setTimeout(() => (hasSuccessSnack.value = false), 6000)
    }

    return {
      hasError,
      hasSuccessSnack,
      verificationCode,
      verificationFieldRules,
      submit,
      focus,
      textField,
      isValid,
      prevent,
      retry,
    }
  },
})
</script>
