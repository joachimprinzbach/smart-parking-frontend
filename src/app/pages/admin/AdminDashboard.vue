<template>
 <section class="pl-5 pr-5 pt-5 pb-5">
    <h1 class="text-h4">{{ $t('admin.dashboard.title') }}</h1>
    <br />
    <v-data-table
      :loading="isPending"
      :headers="headers"
      :items="facilities"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.street="{ item }">
        {{ item.address.street }} {{ item.address.streetNumber }}
      </template>
      <template v-slot:item.city="{ item }">
        {{ item.address.postalCode }} {{ item.address.city }}
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn color="primary" small @click="goToFacilityPage(item.id)"
          >{{ $t('admin.table.action.detail') }}</v-btn
        >
      </template>
    </v-data-table>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api"
import { Header } from "../../utils/table.utils"
import { api } from "../../api"
import { removeAccessToken } from "../../reactive/admin.state"

export default defineComponent({
  setup(props, { root }) {
    const hasError = ref<boolean>(false)
    const isPending = ref<boolean>(false)
    const facilities = ref<any>([])

    const headers = [
      Header("Name", "name"),
      Header("Strasse", "street"),
      Header("Ort", "city"),
      Header("Gebuchte Plätze", "occupied"),
      Header("Anzahl Plätze", "capacity"),
      Header("Aktion", "action"),
    ]

    onMounted(async () => {
      hasError.value = false
      isPending.value = true
      const response = await api.admin.findAllFacilities()
      if (response.wasSuccessful && response.data) {
        facilities.value = response.data
      } else {
        if (response.status === 401) {
          removeAccessToken()
          root.$router.push({ name: "admin.login" })
        }
        hasError.value = true
      }
      isPending.value = false
    })

    async function goToFacilityPage(id: string) {
      root.$router.push({
        name: "admin.facility",
        params: { id },
      })
    }

    return {
      facilities,
      hasError,
      isPending,
      headers,
      goToFacilityPage,
    }
  },
})
</script>
