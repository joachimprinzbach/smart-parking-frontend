<template>
  <section>
    <Hint large :content="$t('booking.form.licensePlate.hint')" />
    <v-text-field
      filled
      maxlength="10"
      ref="textField"
      @input="
        v => {
          licensePlate = v.toUpperCase()
        }
      "
      v-model="licensePlate"
      :rules="licensePlateFieldRules"
      :label="$t('booking.form.licensePlate.label')"
    ></v-text-field>
    <v-btn block large color="primary" :disabled="!isValid" @click="submit()">
      {{ $t("common.button.next") }}
    </v-btn>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  watchEffect,
  ref,
  computed,
  onMounted,
} from "@vue/composition-api"
import { useLicensePlate } from "@/app/reactive/form/license-plate.reactive"
import Hint from "@/app/components/Hint.vue"

export default defineComponent({
  components: { Hint },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  setup(props, { root, emit }) {
    const {
      licensePlate,
      licensePlateFieldRules,
      loadLicensePlateFromCache,
      saveLicensePlateToCache,
    } = useLicensePlate(root)
    const textField = ref<{ valid: boolean; focus: () => undefined }>(null)

    const isValid = computed(() =>
      textField.value ? textField.value.valid : false,
    )

    onMounted(() => {
      licensePlate.value = props.value
      loadLicensePlateFromCache()
    })

    watchEffect(() => {
      emit("input", licensePlate.value)
    })

    function submit() {
      saveLicensePlateToCache()
      emit("submit", licensePlate.value)
    }

    function focus() {
      if (textField.value) {
        textField.value.focus()
      }
    }

    return {
      licensePlate,
      licensePlateFieldRules,
      submit,
      focus,
      textField,
      isValid,
    }
  },
})
</script>
