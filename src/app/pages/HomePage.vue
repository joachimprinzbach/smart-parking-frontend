<template>
  <div class="home">
    <section class="lead has-background-primary has-color-white">
      <v-container fluid>
        <p class="motto">{{ $t('home.motto') }}</p>
        <h3>{{ $t('home.first') }}</h3>
        <h3>{{ $t('home.second') }}</h3>
        <h3>{{ $t('home.third') }}</h3>
        <p class="payments">{{ $t('home.paymentMethods') }}</p>
        <v-img src="../../assets/payment-methods.svg"></v-img>
      </v-container>
    </section>
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card @click="navigateToObjectDetail">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="$t('object.picasso.title')"></v-card-title>
                <v-card-subtitle
                  class="has-color-success"
                  v-text="$t('object.detail.slots', {amount: 7})"
                ></v-card-subtitle>
                <section class="card-address">
                  <v-card-subtitle v-text="$t('object.picasso.street')"></v-card-subtitle>
                  <v-card-subtitle v-text="$t('object.picasso.city')"></v-card-subtitle>
                </section>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img src="../../assets/picasso-1.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup(props, { root }) {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle(null)
      setHasBackButton(false)
    })

    return {
      navigateToObjectDetail: () =>
        root.$router.push({ name: 'object.detail' }),
    }
  },
})
</script>

<style lang="scss">
@import '../../styles/utilities/all';
.lead {
  padding: 0 12px;
  p.motto {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 5px;
  }
  p.payments {
    margin-top: 20px;
    margin-bottom: 6px;
  }
}
section.card-address > .v-card__subtitle {
  padding: 0 16px !important;
}
</style>