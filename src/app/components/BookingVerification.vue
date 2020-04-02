<template>
  <v-container class="booking-verification">
    <v-alert v-model="alert" dismissible type="error">
      <p class="title">{{ $t('booking.verification.alert.title') }}</p>
      <p v-html="$t('booking.verification.alert.text')"></p>
      <v-btn color="white" light @click="retry">{{ $t('booking.verification.alert.button') }}</v-btn>
    </v-alert>
    <v-form v-model="validModel">
      <h2>{{ $t("booking.verification.subtitle") }}</h2>
      <br />
      <p>
        <strong>{{ $t("booking.verification.explanation") }}</strong>
      </p>
      <p>{{ $t("booking.verification.token.hint", { mobile }) }}</p>
      <v-text-field
        autofocus
        pattern="[0-9]*"
        type="text"
        v-model="tokenModel"
        :rules="[rules.isRequired, rules.isNumeric, rules.isLength]"
        :label="$t('booking.verification.token.label')"
        :loading="isPending"
        :disabled="isPending"
        maxlength="6"
        filled
      ></v-text-field>
      <br />
      <v-btn
        block
        color="primary"
        :loading="isPending"
        :disabled="!validModel || isPending"
        @click="next()"
        >{{ $t("booking.verification.next") }}</v-btn
      >
    </v-form>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline">{{
          $t("booking.verification.dialog.title")
        }}</v-card-title>
        <v-card-text
          v-html="$t('booking.verification.dialog.text')"
        ></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="disagree()">{{
            $t("booking.verification.dialog.disagree")
          }}</v-btn>
          <v-btn color="blue darken-1" text @click="agree()">{{
            $t("booking.verification.dialog.agree")
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      top
      v-model="snackbar"
      :multi-line="'multi-line'"
      :timeout="6000"
    >
      {{ $t('booking.verification.snackbar.text') }}
      <v-btn dark color="blue" text @click="snackbar = false">
        {{ $t('common.button.close') }}
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBookingForm } from "../reactive/booking-form.state"
import { useBooking } from "../reactive/booking.state"
import isEmpty from "validator/es/lib/isEmpty"
import isLength from "validator/es/lib/isLength"
import isNumeric from "validator/es/lib/isNumeric"

export default defineComponent({
  setup(props, { root, emit }) {
    const { setTitle, setCloseButton } = useAppBar()
    const { mobile } = useBookingForm()
    const {
      booking,
      isPending,
      verifySmsToken,
      startBooking,
      retrySmsVerification,
    } = useBooking()

    const alert = ref(false)
    const dialog = ref(false)
    const snackbar = ref(false)
    const validModel = ref(false)
    const tokenModel = ref("")

    onMounted(() => {
      setTitle("booking.verification.appBarTitle")
      setCloseButton(() => emit("closeVerification"))
    })

    const next = async () => {
      alert.value = false
      try {
        await verifySmsToken(tokenModel.value)
        dialog.value = true
      } catch (e) {
        alert.value = true
        tokenModel.value = ""
      }
    }

    const agree = async () => {
      await startBooking()
      root.$router.replace({
        name: "booking.detail",
        params: {
          id: booking.id,
        },
      })
    }

    const disagree = () => {
      dialog.value = false
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
      dialog,
      validModel,
      tokenModel,
      next,
      agree,
      disagree,
      mobile,
      isPending,
      retry,
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
