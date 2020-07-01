<template>
  <v-container class="booking-confirmation text-center">
    <v-img max-width="280px" :src="require('@/assets/car.svg')" />
    <Title v-html="$t('booking.confirmation.title')"></Title>

    <Content v-html="$t('booking.confirmation.receipt.text')"></Content>
    <v-btn block color="primary" outlined @click="navigateToReceipt()">
      {{ $t("booking.confirmation.receipt.button") }}
    </v-btn>

    <Feedback />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useBrowser } from "@/app/reactive/browser.state"
import Feedback from "@/app/components/common/Feedback.vue"
import Content from "@/app/components/common/Content.vue"
import Title from "@/app/components/common/Title.vue"

export default defineComponent({
  components: {
    Feedback,
    Title,
    Content,
  },
  setup(props, { root }) {
    const AppBar = useAppBar()
    const Browser = useBrowser()

    onMounted(async () => {
      AppBar.setTitle("booking.confirmation.appBarTitle")
      AppBar.setCloseButton(() => root.$router.replace({ name: "home" }))
      Browser.setHasUnsavedData(false)
    })

    function navigateToReceipt() {
      const route = root.$router.resolve({
        name: "booking.detail",
        params: { id: root.$route.params.id },
      })
      window.open(route.href, "_blank")
    }

    function navigateToHome() {
      root.$router.replace({ name: "home" })
    }

    return {
      navigateToReceipt,
      navigateToHome,
    }
  },
})
</script>

<style lang="scss">
.booking-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 10px;
  }

  p.text-body-1, p.text-body-2 {
    margin-top: 25px;
  }

  .v-image {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
