<template>
  <v-container class="booking-form">
    <v-form v-model="validModel">
      <p>
        <strong>{{ $t("booking.form.subtitle") }}</strong>
      </p>
      <p>{{ $t("booking.form.licensePlate.hint") }}</p>
      <v-text-field
        autofocus
        v-model="licensePlateModel"
        :rules="[rules.isRequired]"
        :label="$t('booking.form.licensePlate.label')"
        :loading="isPending"
        maxlength="10"
        filled
      ></v-text-field>
      <p>{{ $t("booking.form.mobile.hint") }}</p>
      <v-text-field
        type="tel"
        v-model="mobileModel"
        :label="$t('booking.form.mobile.label')"
        :loading="isPending"
        :rules="[rules.isRequired, rules.isMobilePhone]"
        maxlength="15"
        filled
      ></v-text-field>
      <router-link to="terms">
        <strong>{{ $t("booking.form.agb") }}</strong>
      </router-link>
      <br />
      <br />
      <v-btn block color="primary" :disabled="!validModel || isPending" @click="submit()">{{
        $t("object.detail.book")
      }}</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBookingForm } from "../reactive/booking-form.state"
import isMobilePhone from "validator/es/lib/isMobilePhone"
import isEmpty from "validator/es/lib/isEmpty"
import { useBooking } from "../reactive/booking.state"

export default defineComponent({
  setup(props, { root, emit }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { booking, createBooking, isPending } = useBooking()
    const {
      setMobile,
      setLicensePlate,
      setValid,
      licensePlate,
      mobile,
      valid,
    } = useBookingForm()

    const licensePlateModel = ref("")
    const mobileModel = ref("")
    const validModel = ref(false)

    licensePlateModel.value = licensePlate.value
    mobileModel.value = mobile.value
    validModel.value = valid.value

    onMounted(() => {
      setTitle("booking.form.appBarTitle")
      setHasBackButton(true)
    })

    watch(licensePlateModel, v => setLicensePlate(v))
    watch(mobileModel, v => setMobile(v))
    watch(validModel, v => setValid(v))

    const submit = async () => {
      await createBooking({
        licensePlate: licensePlateModel.value,
        mobileNumber: mobileModel.value,
      })
      emit("formSubmit")
    }

    return {
      validModel,
      licensePlateModel,
      mobileModel,
      submit,
      isPending,
      booking,
      rules: {
        isRequired: (value: string) =>
          !isEmpty(value) || root.$i18n.t("common.form.required"),
        isMobilePhone: (value: string) =>
          isMobilePhone(value) || root.$i18n.t("common.form.mobile"),
      },
    }
  },
})
</script>
