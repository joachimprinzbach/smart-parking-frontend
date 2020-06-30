<template>
  <v-container>
    <BookingReceiptBox :booking="booking" :facility="facility" />
    <br />
    <Content v-html="$t('booking.receipt.text')"></Content>
    <br />
    <Content v-html="$t('booking.receipt.greets')"></Content>
    <br />
    <Content>
      Basler Versicherungen<br />
      Aeschengraben 21 <br />
      CH-4002 Basel
    </Content>
    <br />
    <Content>{{ $t("booking.receipt.taxLabel") }}: CHE-116.301.152</Content>

    <br />
    <v-btn block color="primary" outlined @click="goToHome()">
      {{ $t("booking.receipt.navigate.home") }}
    </v-btn>
    <br />
    <v-divider />
    <Feedback />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import { calculatePriceRawByBooking } from "@/app/utils/price-calculator.util"
import { formatDate } from "@/app/utils/date.util"
import { FacilityModel } from "@/app/models/facility.model"
import ParkTime from "@/app/components/booking/ParkTime.vue"
import ParkPrice from "@/app/components/booking/ParkPrice.vue"
import Hint from "@/app/components/common/Hint.vue"
import Content from "@/app/components/common/Content.vue"
import BookingReceiptBox from "@/app/components/booking/BookingReceiptBox.vue"
import Feedback from "@/app/components/common/Feedback.vue"

export default defineComponent({
  components: {
    ParkTime,
    ParkPrice,
    Hint,
    Content,
    BookingReceiptBox,
    Feedback,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      required: true,
    },
    facility: {
      type: Object as () => FacilityModel,
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
      AppBar.setTitle("booking.receipt.title")
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
