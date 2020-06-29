import isEmpty from "validator/es/lib/isEmpty"
import { computed, ref, watchEffect } from "@vue/composition-api"
import { isMobilePhone } from "../../validator/is-mobile-phone.validator"

export interface MobilePrefixItem {
  text: string
  prefix: string
  value: string
}

export const MobilePrefixes: MobilePrefixItem[] = [
  { text: "+41 (CH)", prefix: "+41", value: "ch" },
  { text: "+49 (DE)", prefix: "+49", value: "de" },
  { text: "+33 (FR)", prefix: "+33", value: "fr" },
]

export const MOBILE_STORAGE_KEY = "smart-parking.form.mobile"

export function useMobile(root: any) {
  const mobile = ref("")
  const mobilePrefix = ref<MobilePrefixItem>(MobilePrefixes[0])
  const mobileNumber = ref("")
  const isMobilePristine = ref(true)

  const mobileRules = {
    isRequired: (value: string) => !isEmpty(value),
    isMobilePhone,
  }

  const mobileFieldRules = [
    (value: string) =>
      mobileRules.isRequired(value) || root.$i18n.t("common.form.required"),
    (value: string) =>
      isMobilePhone(mobilePrefix.value.prefix + value) ||
      root.$i18n.t("common.form.mobile"),
  ]

  const mobileStepRules = computed(() => [
    () =>
      isMobilePristine.value
        ? isMobilePristine.value
        : mobileRules.isRequired(mobile.value),
    () =>
      isMobilePristine.value
        ? isMobilePristine.value
        : mobileRules.isMobilePhone(mobile.value),
  ])

  watchEffect(() => {
    if (isMobilePristine && mobile.value && mobile.value.length > 0) {
      isMobilePristine.value = false
    }
  })

  function buildMobile() {
    return mobilePrefix.value && mobileNumber.value
      ? mobilePrefix.value.prefix + mobileNumber.value
      : ""
  }

  function loadMobileFromCache() {
    const data = localStorage.getItem(MOBILE_STORAGE_KEY)
    if (data) {
      const json = JSON.parse(data)
      mobilePrefix.value = json.prefix
      mobileNumber.value = json.number
    }
  }

  function saveMobileToCache() {
    localStorage.setItem(
      MOBILE_STORAGE_KEY,
      JSON.stringify({
        prefix: mobilePrefix.value,
        number: mobileNumber.value,
      }),
    )
  }

  return {
    mobile,
    mobilePrefix,
    mobileNumber,
    mobileRules,
    mobileFieldRules,
    mobileStepRules,
    isMobilePristine,
    buildMobile,
    loadMobileFromCache,
    saveMobileToCache,
  }
}
