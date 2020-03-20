<template>
  <v-container fluid class="booking-verification">
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
        maxlength="6"
        filled
      ></v-text-field>
      <br />
      <v-btn block color="primary" :disabled="!validModel" @click="next()">{{
        $t("booking.verification.next")
      }}</v-btn>
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBookingForm } from "../reactive/booking-form.state"
import isEmpty from "validator/es/lib/isEmpty"
import isLength from "validator/es/lib/isLength"
import isNumeric from "validator/es/lib/isNumeric"

export default defineComponent({
  setup(props, { root, emit }) {
    const { setTitle, setCloseButton } = useAppBar()
    const { mobile } = useBookingForm()
    const dialog = ref(false)
    const validModel = ref(false)
    const tokenModel = ref("")

    onMounted(() => {
      setTitle("booking.verification.appBarTitle")
      setCloseButton(() => emit("closeVerification"))
    })

    const next = async () => {
      dialog.value = true
    }

    const agree = () => {
      // TODO: send request to backend
      root.$router.replace({
        name: "booking.detail",
        params: {
          id: "picasso",
        },
      })
    }

    const disagree = () => {
      dialog.value = false
    }

    return {
      dialog,
      validModel,
      tokenModel,
      next,
      agree,
      disagree,
      mobile,
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
