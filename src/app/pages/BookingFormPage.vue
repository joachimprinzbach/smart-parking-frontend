<template>
  <v-container fluid class="booking-form">
    <v-form v-model="valid">
      <p>
        <strong>{{ $t("booking.form.subtitle") }}</strong>
      </p>
      <p>{{ $t("booking.form.licencePlate.hint") }}</p>
      <v-text-field
        autofocus
        v-model="licencePlate"
        :rules="[rules.isRequired]"
        :label="$t('booking.form.licencePlate.label')"
        maxlength="10"
        filled
      ></v-text-field>
      <p>{{ $t("booking.form.mobile.hint") }}</p>
      <v-text-field
        type="tel"
        v-model="mobile"
        :label="$t('booking.form.mobile.label')"
        :rules="[rules.isRequired, rules.isMobilePhone]"
        maxlength="15"
        filled
      ></v-text-field>
      <router-link to="terms">
        <strong>{{ $t("booking.form.agb") }}</strong>
      </router-link>
      <br />
      <br />
      <v-btn block color="primary" :disabled="!valid" @click="submit()">{{
        $t("object.detail.book")
      }}</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "@vue/composition-api";
import { useAppBar } from "../reactive/app-bar.state";
import { useBookingForm } from "../reactive/booking-form.state";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import isEmpty from "validator/es/lib/isEmpty";

export default defineComponent({
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar();
    const {
      setMobile,
      setLicencePlate,
      getLicencePlate,
      getMobile,
    } = useBookingForm();

    const licencePlate = ref("");
    const mobile = ref("");
    const valid = ref(false);

    licencePlate.value = getLicencePlate.value;
    mobile.value = getMobile.value;

    onMounted(() => {
      setTitle("booking.form.appBarTitle");
      setHasBackButton(true);
    });

    watch(licencePlate, v => setLicencePlate(v));
    watch(mobile, v => setMobile(v));

    const submit = () => {
      // TODO: send request to backend
      root.$router.push({
        name: "booking.verification",
        params: {
          id: "bubu", // TODO: add booking hash
        },
      });
    };

    return {
      valid,
      licencePlate,
      mobile,
      submit,
      rules: {
        isRequired: (value: string) =>
          !isEmpty(value) || root.$i18n.t("common.form.required"),
        isMobilePhone: (value: string) =>
          isMobilePhone(value) || root.$i18n.t("common.form.mobile"),
      },
    };
  },
});
</script>
