<template>
  <v-container>
    <v-form v-model="isFormValid">
      <p class="title">{{ $t("admin.login.subtitle") }}</p>

      <v-alert v-model="hasError" type="error">
        <p class="subtitle-1">{{ $t("admin.login.alert.title") }}</p>
        <p class="body-2" v-html="$t('admin.login.alert.text')"></p>
      </v-alert>

      <v-text-field
        autofocus
        v-model="username"
        :rules="[rules.isRequired]"
        :label="$t('admin.login.username.label')"
        :loading="isPending"
        filled
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        :rules="[rules.isRequired]"
        :label="$t('admin.login.password.label')"
        :loading="isPending"
        filled
      ></v-text-field>
      <br />
      <v-btn
        block
        color="primary"
        :disabled="!isFormValid || isPending"
        @click="submit()"
        >{{ $t("admin.login.submit") }}</v-btn
      >
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import isEmpty from "validator/es/lib/isEmpty"
import { api } from "../../api"
import { setAccessToken } from "../../reactive/admin.state"

export default defineComponent({
  setup(props, { root }) {
    const password = ref("")
    const username = ref("")
    const isFormValid = ref(false)
    const isPending = ref(false)
    const hasError = ref(false)
    const rules = {
      isRequired: (value: string) =>
        !isEmpty(value) || root.$i18n.t("common.form.required"),
    }

    async function submit() {
      isPending.value = true
      hasError.value = false
      const response = await api.admin.login({
        username: username.value,
        password: password.value,
      })
      if (response.wasSuccessful && response.data) {
        setAccessToken(response.data.accessToken)
        root.$router.replace({ name: "admin.dashboard" })
      } else {
        hasError.value = true
      }
      isPending.value = false
    }

    return {
      isFormValid,
      isPending,
      hasError,
      password,
      username,
      rules,
      submit,
    }
  },
})
</script>
