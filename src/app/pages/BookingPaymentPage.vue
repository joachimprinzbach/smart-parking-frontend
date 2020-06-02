<template>
  <v-container class="booking-payment">
    <v-skeleton-loader v-if="isLoading" type="heading"></v-skeleton-loader>
    <v-skeleton-loader v-if="isLoading" type="image"></v-skeleton-loader>
    <v-skeleton-loader v-if="isLoading" type="button"></v-skeleton-loader>

    <v-alert v-model="hasPaymentError" dismissible type="error">
      <p class="subtitle-1">{{ $t("booking.payment.alert.title") }}</p>
      <p class="body-2" v-html="$t('booking.payment.alert.text')"></p>
    </v-alert>

    <section v-if="!isLoading && !isPaymentDialogOpen">
      <h1 class="heading">{{ $t("booking.payment.title") }}</h1>
      <br />
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
import { defineComponent, onMounted, computed, ref } from "@vue/composition-api"
import { useAppBar } from "../reactive/app-bar.state"
import { useBooking } from "../reactive/booking.state"
import { useBrowser } from "../reactive/browser.state"
import { formatDate } from "../utils/date.util"
import ParkTime from "@/app/components/ParkTime.vue"
import ParkPrice from "@/app/components/ParkPrice.vue"
import { calculatePriceRawByBooking } from "../utils/price-calculator.util"
import { appConfig } from "../../config/app.config"
import { getPaymentInformation } from "../api/booking.api"

export default defineComponent({
  components: {
    ParkPrice,
    ParkTime,
  },
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()
    const { setHasUnsavedData } = useBrowser()
    const { booking, loadBooking, isPending } = useBooking()
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

    const baseUrl = () => `${appConfig.apiPath}/booking/${booking.id}/pay`
    const successUrl = computed(() => `${baseUrl()}/success`)
    const errorUrl = computed(() => `${baseUrl()}/error`)
    const cancelUrl = computed(() => `${baseUrl()}/cancel`)
    const amount = computed(() => `${calculatePriceRawByBooking(booking)}00`)
    const startedAt = computed(() => formatDate(booking.startedAt))
    const stoppedAt = computed(() => formatDate(booking.stoppedAt))
    const isLoading = computed(() => isPending.value || isLoadingPayment.value)

    onMounted(() => {
      setTitle("booking.payment.appBarTitle")
      setHasBackButton(true)
      setHasUnsavedData(false)
      loadBooking(root.$router, root.$route.params.id)
      loadPaymentInformation(root.$route.params.id)

      if (root.$route.query.status === "error") {
        hasPaymentError.value = true
      }
    })

    return {
      isLoading,
      booking,
      refno,
      merchantId,
      sign,
      submitPayment,
      amount,
      startedAt,
      stoppedAt,
      successUrl,
      errorUrl,
      cancelUrl,
      hasPaymentError,
      isPaymentDialogOpen,
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
    const response = await getPaymentInformation(id)
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
