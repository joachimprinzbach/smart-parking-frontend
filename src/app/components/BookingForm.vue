<template>
  <v-container class="booking-form">
    <v-form v-model="validModel">
      <p class="title">{{ $t("booking.form.subtitle") }}</p>
      <Hint large :content="$t('booking.form.licensePlate.hint')" />
      <v-text-field
        autofocus
        v-model="licensePlateModel"
        :rules="[rules.isRequired, rules.isLicensePlate]"
        :label="$t('booking.form.licensePlate.label')"
        :loading="isPending"
        maxlength="10"
        filled
      ></v-text-field>
      <Hint large :content="$t('booking.form.mobile.hint')" />
      <v-row no-gutters>
        <v-col cols="5" style="padding-right: 6px">
          <v-select
            v-model="prefixModel"
            return-object
            :items="prefixes"
            filled
            :label="$t('booking.form.prefixes.label')"
            persistent-hint
            :hint="$t('booking.form.prefixes.hint.' + prefixModel.value)"
          ></v-select>
        </v-col>
        <v-col cols="7" style="padding-left: 6px">
          <v-text-field
            type="tel"
            v-model="mobileModel"
            :label="$t('booking.form.mobile.label')"
            :loading="isPending"
            :rules="[rules.isRequired, rules.isMobilePhone]"
            maxlength="15"
            filled
          ></v-text-field>
        </v-col>
      </v-row>

      <router-link to="terms" class="body-2">
        <strong>{{ $t("booking.form.agb") }}</strong>
      </router-link>
      <br />
      <br />
      <v-btn
        block
        color="primary"
        :disabled="!validModel || isPending"
        @click="submit()"
        >{{ $t("booking.form.submit") }}</v-btn
      >
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBookingForm, MobilePrefixItem } from "../reactive/booking-form.state"
import isEmpty from "validator/es/lib/isEmpty"
import { useBooking } from "../reactive/booking.state"
import Hint from "./Hint.vue"
import { isMobilePhone } from "../validator/is-mobile-phone.validator"
import { isLicensePlate } from "../validator/is-license-plate.validator"

export default defineComponent({
  components: { Hint },
  setup(props, { root, emit }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { booking, createBooking, isPending } = useBooking()
    const {
      setMobile,
      setMobilePrefix,
      setLicensePlate,
      setValid,
      licensePlate,
      mobilePrefix,
      mobile,
      valid,
    } = useBookingForm()

    const prefixes: MobilePrefixItem[] = [
      { text: "+41 (CH)", prefix: "+41", value: "ch" },
      { text: "+49 (DE)", prefix: "+49", value: "de" },
      { text: "+33 (FR)", prefix: "+33", value: "fr" },
    ]

    const licensePlateModel = ref("")
    const mobileModel = ref("")
    const prefixModel = ref<MobilePrefixItem>(prefixes[0])
    const validModel = ref(false)

    licensePlateModel.value = licensePlate.value
    mobileModel.value = mobile.value
    prefixModel.value = mobilePrefix.value
    validModel.value = valid.value

    onMounted(() => {
      setTitle("booking.form.appBarTitle")
      setHasBackButton(true)
    })

    watch(licensePlateModel, v => setLicensePlate(v))
    watch(prefixModel, v => setMobilePrefix(v))
    watch(mobileModel, v => setMobile(v))
    watch(validModel, v => setValid(v))

    const submit = async () => {
      await createBooking({
        licensePlate: licensePlateModel.value,
        mobileNumber: prefixModel.value.prefix + mobileModel.value,
        facilityId: root.$route.params.id,
        hasAcceptedTermsOfService: true,
      })
      emit("formSubmit")
    }

    return {
      prefixes,
      validModel,
      licensePlateModel,
      mobileModel,
      prefixModel,
      submit,
      isPending,
      booking,
      rules: {
        isRequired: (value: string) =>
          !isEmpty(value) || root.$i18n.t("common.form.required"),
        isMobilePhone: (value: string) =>
          isMobilePhone(prefixModel.value.prefix + value) ||
          root.$i18n.t("common.form.mobile"),
        isLicensePlate: (value: string) =>
          isLicensePlate(value) || root.$i18n.t("common.form.licensePlate"),
      },
    }
  },
})
</script>
