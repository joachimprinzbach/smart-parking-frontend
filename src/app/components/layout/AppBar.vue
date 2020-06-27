<template>
  <v-app-bar app absolute flat color="primary" dark>
    <v-btn icon v-if="hasBackButton && !hasCloseButton" @click="navigateBack()">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn icon v-if="hasCloseButton && !hasBackButton" @click="close()">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-img
      v-if="!hasTitle"
      class="mx-2"
      :src="require('../../../assets/logo.svg')"
      @click="navigateHome()"
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
            <v-list-item-title>{{ $t("about.appBarTitle") }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateToContact">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{
              $t("contact.appBarTitle")
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="navigateToTerms">
            <v-list-item-icon>
              <v-icon>mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t("terms.appBarTitle") }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider class="no-margin" verticaly></v-divider>
        <v-card-text style="text-align: center">
          <span class="uppercase"
            >Version ({{ appVersion }} - {{ version }})</span
          >
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAppBar } from "@/app/reactive/app-bar.state"
import { useApiInformation } from "@/app/reactive/api-information"
import { appConfig } from "@/config/app.config"

export default defineComponent({
  setup(props, { root }) {
    const {
      hasBackButton,
      hasTitle,
      title,
      runCloseFunction,
      hasCloseButton,
    } = useAppBar()
    const { isPending, version, getApiInformation } = useApiInformation()
    const appVersion = appConfig.version

    onMounted(() => getApiInformation())

    const isInformationPage = () =>
      ["/contact", "/about", "/terms"].indexOf(root.$route.path) >= 0

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
      hasCloseButton,
      isPending,
      close: () => runCloseFunction(),
      navigateHome: () => {
        if (root.$route.name !== "home") {
          root.$router.push({ name: "home" })
        }
      },
      navigateToAbout: () => navigate("about"),
      navigateToContact: () => navigate("contact"),
      navigateToTerms: () => navigate("terms"),
      navigateBack: () => root.$router.back(),
    }
  },
})
</script>
