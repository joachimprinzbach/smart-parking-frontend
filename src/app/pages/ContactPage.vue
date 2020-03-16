<template>
  <v-container fluid class="contact">
    <p v-html="$t('contact.content')"></p>

    <v-divider></v-divider>

    <v-list>
      <v-list-item href="mailto:smart_parking@baloise.ch">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>smart_parking@baloise.ch</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item href="tel:+41 58 285 73 76">
        <v-list-item-icon>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>+41 58 285 73 76</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <a href>+41 58 285 7376</a>
    <a href>smart_parking@baloise.ch</a>-->
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'

export default defineComponent({
  setup() {
    const { setHasBackButton, setTitle } = useAppBar()

    onMounted(() => {
      setTitle('contact.appBarTitle')
      setHasBackButton(true)
    })

    return {}
  },
})
</script>