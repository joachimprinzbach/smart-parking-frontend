import { ComponentInstance } from "@vue/composition-api/dist/component"
import { computed, ref, watchEffect } from "@vue/composition-api"
import isEmpty from "validator/es/lib/isEmpty"
import { isLicensePlate } from "../../validator/is-license-plate.validator"

export const LICENSE_PLATE_STORAGE_KEY = "smart-parking.form.license-plate"

export function useLicensePlate(root: ComponentInstance) {
  const licensePlate = ref("")
  const isLicensePlatePristine = ref(true)

  const licensePlateRules = {
    isRequired: (value: string) => !isEmpty(value),
    isLicensePlate,
  }

  const licensePlateFieldRules = [
    (value: string) =>
      licensePlateRules.isRequired(value) ||
      root.$i18n.t("common.form.required"),
    (value: string) =>
      licensePlateRules.isLicensePlate(value) ||
      root.$i18n.t("common.form.licensePlate"),
  ]

  const licensePlateStepRules = computed(() => [
    () =>
      isLicensePlatePristine.value
        ? isLicensePlatePristine.value
        : licensePlateRules.isRequired(licensePlate.value),
    () =>
      isLicensePlatePristine.value
        ? isLicensePlatePristine.value
        : licensePlateRules.isLicensePlate(licensePlate.value),
  ])

  watchEffect(() => {
    if (
      isLicensePlatePristine &&
      licensePlate.value &&
      licensePlate.value.length > 0
    ) {
      isLicensePlatePristine.value = false
    }
  })

  function loadLicensePlateFromCache() {
    const data = localStorage.getItem(LICENSE_PLATE_STORAGE_KEY)
    if (data) {
      licensePlate.value = data
    }
  }

  function saveLicensePlateToCache() {
    localStorage.setItem(LICENSE_PLATE_STORAGE_KEY, licensePlate.value)
  }

  return {
    licensePlate,
    licensePlateStepRules,
    licensePlateFieldRules,
    isLicensePlatePristine,
    loadLicensePlateFromCache,
    saveLicensePlateToCache,
  }
}
