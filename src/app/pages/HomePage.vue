<template>
  <div class="home">
    <section>Tutorial</section>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="'Picasso Platz'"></v-card-title>
              <v-card-subtitle v-text="'Strasse 88, 4000 Basel'"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="../../assets/logo.png"></v-img>
            </v-avatar>
          </div>
          <!-- <v-card-title class="headline">Unlimited music now</v-card-title>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle(null)
      setHasBackButton(false)
    })

    return {}
  },
})
</script>
