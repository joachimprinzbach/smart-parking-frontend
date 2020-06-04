<template>
  <v-container>
    <v-skeleton-loader v-if="isLoading" type="heading"></v-skeleton-loader>
    <v-skeleton-loader v-if="isLoading" type="image"></v-skeleton-loader>
    <v-skeleton-loader v-if="isLoading" type="button"></v-skeleton-loader>

    <section v-if="!isLoading && !isPaymentDialogOpen">
      <h1 class="title">{{ $t("booking.payment.title") }}</h1>
      <br />
      <v-alert v-model="hasPaymentError" type="error">
        <p class="subtitle-1">{{ $t("booking.payment.alert.title") }}</p>
        <p class="body-2" v-html="$t('booking.payment.alert.text')"></p>
      </v-alert>
      <div class="box">
        <table>
          <tr>
            <th>{{ $t("booking.payment.start") }}</th>
            <td>{{ startedAt }}</td>
          </tr>
          <tr>
            <th>{{ $t("booking.payment.end") }}</th>
            <td>{{ stoppedAt }}</td>
          </tr>
          <tr>
            <th>{{ $t("booking.payment.duration") }}</th>
            <td>
              <ParkTime
                :startedAt="booking.startedAt"
                :stoppedAt="booking.stoppedAt"
              />
            </td>
          </tr>
        </table>

        <hr />
        <table>
          <tr>
            <th>{{ $t("booking.payment.total") }}</th>
            <td>
              <ParkPrice
                :startedAt="booking.startedAt"
                :stoppedAt="booking.stoppedAt"
              />
            </td>
          </tr>
        </table>
      </div>
      <br />

      <form
        id="paymentForm"
        data-currency="CHF"
        :data-amount="amount"
        :data-merchant-id="merchantId"
        :data-sign="sign"
        :data-refno="refno"
        :data-success-url="successUrl"
        :data-error-url="errorUrl"
        :data-cancel-url="cancelUrl"
      >
        <v-btn
          id="paymentButton"
          block
          color="primary"
          @click="submitPayment()"
          >{{ $t("booking.payment.submit") }}</v-btn
        >
      </form>
    </section>

    <section v-if="!isLoading && isPaymentDialogOpen">
      <h1 class="heading">{{ $t("booking.payment.isLoading.title") }}</h1>
      <h2 class="body-1">{{ $t("booking.payment.isLoading.text") }}</h2>
      <br />
      <br />
      <br />
      <div class="d-flex justify-center">
        <v-progress-circular
          :size="64"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
    </section>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  ref,
  computed,
  onMounted,
} from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { api } from "@/app/api"
import { appConfig } from "@/config/app.config"
import { calculatePriceRawByBooking } from "@/app/utils/price-calculator.util"
import { formatDate } from "@/app/utils/date.util"
import ParkTime from "@/app/components/ParkTime.vue"
import ParkPrice from "@/app/components/ParkPrice.vue"

export default defineComponent({
  components: {
    ParkPrice,
    ParkTime,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
  },
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()
    const {
      isLoadingPayment,
      isPaymentDialogOpen,
      refno,
      merchantId,
      sign,
      loadPaymentInformation,
      submitPayment,
    } = usePayment()

    const hasPaymentError = ref(false)

    const baseUrl = () => `${appConfig.apiPath}/booking/${props.booking.id}/pay`
    const successUrl = computed(() => `${baseUrl()}/success`)
    const errorUrl = computed(() => `${baseUrl()}/error`)
    const cancelUrl = computed(() => `${baseUrl()}/cancel`)
    const amount = computed(
      () => `${calculatePriceRawByBooking(props.booking)}00`,
    )
    const startedAt = computed(() => formatDate(props.booking.startedAt))
    const stoppedAt = computed(() => formatDate(props.booking.stoppedAt))
    const isLoading = computed(() => isLoadingPayment.value)

    onBeforeMount(() => {
      AppBar.setTitle("booking.payment.appBarTitle")
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
      loadPaymentInformation(root.$route.params.id)
    })

    onMounted(
      () => (hasPaymentError.value = root.$route.query.status === "error"),
    )

    return {
      successUrl,
      errorUrl,
      cancelUrl,
      amount,
      startedAt,
      stoppedAt,
      hasPaymentError,
      isLoadingPayment,
      isPaymentDialogOpen,
      refno,
      merchantId,
      sign,
      submitPayment,
      isLoading,
    }
  },
})

function usePayment() {
  const refno = ref<string>("")
  const merchantId = ref<string>("")
  const sign = ref<string>("")
  const isLoadingPayment = ref(true)
  const isPaymentDialogOpen = ref(false)

  async function loadPaymentInformation(id: string) {
    const response = await api.getPaymentInformation(id)
    if (response.wasSuccessful && response.data) {
      sign.value = response.data.sign
      merchantId.value = response.data.merchantId
      refno.value = response.data.refno
    }
    isLoadingPayment.value = false
  }

  function submitPayment() {
    const w: any = window
    w.Datatrans.startPayment({
      form: "#paymentForm",
      loaded: () => {
        isPaymentDialogOpen.value = true
      },
      closed: () => {
        isPaymentDialogOpen.value = false
      },
    })
  }

  return {
    refno,
    merchantId,
    sign,
    isLoadingPayment,
    isPaymentDialogOpen,
    loadPaymentInformation,
    submitPayment,
  }
}
</script>

<style lang="scss">
.v-skeleton-loader {
  margin-bottom: 25px;
}
.v-skeleton-loader__button {
  width: 100%;
}
</style>
