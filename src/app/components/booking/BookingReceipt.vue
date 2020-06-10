<template>
  <v-container>
    <h1 class="heading">{{ $t("booking.receipt.title") }}</h1>
    <br />
    <BookingReceiptBox :booking="booking" />
    <br />
    <p class="body-1" v-html="$t('booking.receipt.text')"></p>
    <br />
    <p class="body-1" v-html="$t('booking.receipt.greets')"></p>
    <br />
    <p class="body-1">
      Basler Versicherung AG <br />
      Basler Leben AG <br />
      Aeschengraben 21 <br />
      CH-4002 Basel
    </p>
    <br />
    <p class="body-1">{{ $t('booking.receipt.taxLabel') }}: CHE-116.301.152</p>

    <br />
    <v-btn block color="primary" outlined @click="goToHome()">
      {{ $t("booking.receipt.navigate.home") }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { calculatePriceRawByBooking } from "@/app/utils/price-calculator.util"
import { formatDate } from "@/app/utils/date.util"
import ParkTime from "@/app/components/ParkTime.vue"
import ParkPrice from "@/app/components/ParkPrice.vue"
import Hint from "@/app/components/Hint.vue"
import BookingReceiptBox from "@/app/components/booking/BookingReceiptBox.vue"

export default defineComponent({
  components: {
    ParkTime,
    ParkPrice,
    Hint,
    BookingReceiptBox,
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

    const amount = computed(
      () => `${calculatePriceRawByBooking(props.booking)}00`,
    )
    const startedAt = computed(() => formatDate(props.booking.startedAt))
    const stoppedAt = computed(() => formatDate(props.booking.stoppedAt))

    onBeforeMount(() => {
      AppBar.setTitle(null)
      AppBar.setHasBackButton(false)
      Browser.setHasUnsavedData(false)
    })

    function goToHome() {
      root.$router.push({ name: "home" })
    }

    return { amount, startedAt, stoppedAt, goToHome }
  },
})
</script>
