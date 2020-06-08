<template>
  <v-container class="booking-verification">
    <v-alert v-model="alert" dismissible type="error">
      <p class="subtitle-1">{{ $t("booking.verification.alert.title") }}</p>
      <p class="body-2" v-html="$t('booking.verification.alert.text')"></p>
      <v-btn color="white" light @click="retry">{{
        $t("booking.verification.alert.button")
      }}</v-btn>
    </v-alert>
    <v-form v-model="validModel">
      <h2 class="headline">{{ $t("booking.verification.subtitle") }}</h2>
      <br />
      <p class="body-1">{{ $t("booking.verification.explanation") }}</p>
      <Hint large :content="$t('booking.form.mobile.hint', { mobile })" />
      <v-text-field
        autofocus
        inputmode="numeric"
        pattern="[0-9]*"
        autocomplete="one-time-code"
        type="number"
        v-model="verificationCode"
        :rules="[rules.isRequired, rules.isNumeric, rules.isLength]"
        :label="$t('booking.verification.code.label')"
        :loading="isPending"
        :disabled="isPending"
        maxlength="6"
        filled
        @keypress.enter="prevent($event)"
      ></v-text-field>
      <br />
      <v-btn
        block
        color="primary"
        :loading="isPending"
        :disabled="!validModel || isPending"
        @click="next($event)"
        >{{ $t("booking.verification.next") }}</v-btn
      >
    </v-form>
    <v-snackbar
      top
      v-model="snackbar"
      :multi-line="'multi-line'"
      :timeout="6000"
    >
      {{ $t("booking.verification.snackbar.text") }}
      <v-btn dark color="blue" text @click="snackbar = false">
        {{ $t("common.button.close") }}
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBookingForm } from "@/app/reactive/booking-form.state"
import { useBooking } from "@/app/reactive/booking.state"
import isEmpty from "validator/es/lib/isEmpty"
import isLength from "validator/es/lib/isLength"
import isNumeric from "validator/es/lib/isNumeric"
import Hint from "@/app/components/Hint.vue"

export default defineComponent({
  components: { Hint },
  setup(props, { root, emit }) {
    const { setTitle, setCloseButton } = useAppBar()
    const { mobile } = useBookingForm()
    const {
      booking,
      isPending,
      verifyCode,
      retrySmsVerification,
    } = useBooking()

    const alert = ref(false)
    const snackbar = ref(false)
    const validModel = ref(false)
    const verificationCode = ref("")

    onMounted(() => {
      setTitle("booking.verification.appBarTitle")
      setCloseButton(() => emit("closeVerification"))
    })

    const prevent = async (event: CustomEvent) => {
      event.preventDefault()
      event.stopPropagation()
    }

    const next = async (event: CustomEvent) => {
      event.preventDefault()
      alert.value = false
      const response = await verifyCode(verificationCode.value)
      if (response.wasSuccessful) {
        root.$router.replace({
          name: "booking.detail",
          params: {
            id: booking.id,
          },
        })
      } else {
        alert.value = true
        verificationCode.value = ""
      }
    }

    const retry = async () => {
      alert.value = false
      await retrySmsVerification()
      snackbar.value = true
      setTimeout(() => (snackbar.value = false), 6000)
    }

    return {
      snackbar,
      alert,
      validModel,
      verificationCode,
      next,
      mobile,
      isPending,
      retry,
      prevent,
      rules: {
        isRequired: (value: string) =>
          !isEmpty(value) || root.$i18n.t("common.form.required"),
        isNumeric: (value: string) =>
          isNumeric(value) || root.$i18n.t("common.form.numeric"),
        isLength: (value: string) =>
          isLength(value, { min: 6, max: 6 }) ||
          root.$i18n.t("common.form.length", { amount: 6 }),
      },
    }
  },
})
</script>
