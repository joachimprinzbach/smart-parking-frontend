import { ComponentInstance } from "@vue/composition-api/dist/component"
import { computed, ref, watchEffect } from "@vue/composition-api"
import isEmpty from "validator/es/lib/isEmpty"
import isNumeric from "validator/es/lib/isNumeric"
import isLength from "validator/es/lib/isLength"

export function useVerification(root: ComponentInstance) {
  const verificationCode = ref("")
  const isVerificationCodePristine = ref(true)

  const verificationRules = {
    isRequired: (value: string) => !isEmpty(value),
    isLength: (value: string) => isLength(value, { min: 6, max: 6 }),
    isNumeric,
  }

  const verificationFieldRules = [
    (value: string) =>
      verificationRules.isRequired(value) ||
      root.$i18n.t("common.form.required"),
    (value: string) =>
      verificationRules.isNumeric(value) || root.$i18n.t("common.form.numeric"),
    (value: string) =>
      verificationRules.isLength(value) || root.$i18n.t("common.form.length"),
  ]

  const verificationStepRules = computed(() => [
    () =>
      isVerificationCodePristine.value
        ? isVerificationCodePristine.value
        : verificationRules.isRequired(verificationCode.value),
    () =>
      isVerificationCodePristine.value
        ? isVerificationCodePristine.value
        : verificationRules.isNumeric(verificationCode.value),
    () =>
      isVerificationCodePristine.value
        ? isVerificationCodePristine.value
        : verificationRules.isLength(verificationCode.value),
  ])

  watchEffect(() => {
    if (
      isVerificationCodePristine &&
      verificationCode.value &&
      verificationCode.value.length > 0
    ) {
      isVerificationCodePristine.value = false
    }
  })

  return {
    verificationCode,
    verificationRules,
    isVerificationCodePristine,
    verificationFieldRules,
    verificationStepRules,
  }
}
