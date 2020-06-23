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
    <Hint large :content="$t('booking.verification.mobile.hint')" />

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
      :loading="isPending"
      :disabled="isPending"
      @keypress.enter="prevent($event)"
    ></v-text-field>
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

export default defineComponent({
  components: { Hint },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  setup(props, { root, emit }) {
    const { verificationCode, verificationFieldRules } = useVerification(root)
    const textField = ref<{ valid: boolean; focus: () => undefined }>(null)
    const isPending = ref(false)
    const hasError = ref(false)

    const isValid = computed(() =>
      textField.value ? textField.value.valid : false,
    )

    watchEffect(() => {
      emit("input", verificationCode.value)
    })

    function submit() {
      emit("submit", verificationCode.value)
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

    function retry() {
      // TODO
    }

    return {
      isPending,
      hasError,
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
