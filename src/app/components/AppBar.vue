<template>
  <v-app-bar app absolute flat color="primary" dark>
    <v-btn icon v-if="hasBackButton" @click="navigateBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-img
      v-if="!hasTitle"
      class="mx-2"
      :src="require('../../assets/logo.svg')"
      max-height="40"
      max-width="250"
      contain
    ></v-img>

    <v-toolbar-title v-if="hasTitle">{{ $t(title) }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item @click="navigateToAbout">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Über uns</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateToContact">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateToTerms">
            <v-list-item-icon>
              <v-icon>mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Terms & Condition</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider verticaly></v-divider>
        <v-card-text style="text-align: center">
          <span>Version ({{appVersion}} - {{version}})</span>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useAppBar } from '../reactive/app-bar.state'
import { useApiInformation } from '../reactive/api/information.api'
import { appConfig } from '../../config/app.config'

export default defineComponent({
  setup(props, { root }) {
    const { hasBackButton, hasTitle, title } = useAppBar()
    const { isPending, version, getApiInformation } = useApiInformation()
    const appVersion = appConfig.version

    onMounted(() => getApiInformation())

    const isInformationPage = () =>
      ['/contact', '/about', '/terms'].indexOf(root.$route.path) >= 0

    const navigate = (routeName: string) =>
      isInformationPage()
        ? root.$router.replace({ name: routeName })
        : root.$router.push({ name: routeName })

    return {
      title,
      version,
      appVersion,
      hasTitle,
      hasBackButton,
      isPending,
      navigateToAbout: () => navigate('about'),
      navigateToContact: () => navigate('contact'),
      navigateToTerms: () => navigate('terms'),
      navigateBack: () => root.$router.back(),
    }
  },
})
</script>
