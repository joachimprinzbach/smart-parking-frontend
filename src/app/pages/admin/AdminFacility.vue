<template>
  <section class="pl-5 pr-5 pt-5 pb-5">
    <AdminFacilityCard
      :loading="isLoading"
      :facility="facility"
      :gates="gates"
    />
    <br />
    <AdminFacilityTable :loading="isLoadingBookings" :bookings="bookings" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "@vue/composition-api"
import { Header } from "../../utils/table.utils"
import { formatStringDate, formatDate } from "../../utils/date.util"
import { api } from "../../api"
import VueRouter, { Route } from "vue-router"
import { removeAccessToken } from "../../reactive/admin.state"
import AdminFacilityCard from "../../components/admin/AdminFacilityCard.vue"
import AdminFacilityTable from "../../components/admin/AdminFacilityTable.vue"
import { FacilityModel } from "../../models/facility.model"

export default defineComponent({
  components: {
    AdminFacilityCard,
    AdminFacilityTable,
  },
  setup(props, { root }) {
    const { isLoadingFacility, facility } = useFacility(
      root.$route,
      root.$router,
    )
    const { isLoadingGates, gates } = useGates(root.$route, root.$router)
    const { isLoadingBookings, bookings } = useBookings(
      root.$route,
      root.$router,
    )

    const headers = [
      Header("Kontrollschild", "licensePlate"),
      {
        text: "Status",
        value: "state",
        align: "start",
        filterable: true,
      },
      Header("Dauer", "time"),
      Header("Kosten", "price"),
      { text: "", value: "data-table-expand" },
    ]

    const isLoading = computed(
      () => isLoadingFacility.value || isLoadingGates.value,
    )

    return {
      formatStringDate,
      isLoadingBookings,
      bookings,
      isLoading,
      facility,
      gates,
      headers,
    }
  },
})

function useFacility(route: Route, router: VueRouter) {
  const isLoadingFacility = ref<boolean>(false)
  const facility = ref<FacilityModel>()

  onMounted(async () => {
    isLoadingFacility.value = true
    const response = await api.admin.findOneFacility(route.params.id)
    if (response.wasSuccessful && response.data) {
      facility.value = response.data
    } else {
      if (response.status === 401) {
        removeAccessToken()
        router.push({ name: "admin.login" })
      }
    }
    isLoadingFacility.value = false
  })

  return {
    isLoadingFacility,
    facility,
  }
}

function useGates(route: Route, router: VueRouter) {
  const isLoadingGates = ref<boolean>(false)
  const gates = ref<any>([])

  onMounted(async () => {
    isLoadingGates.value = true
    const response = await api.admin.findAllGates(route.params.id)
    if (response.wasSuccessful && response.data) {
      gates.value = response.data
    } else {
      if (response.status === 401) {
        removeAccessToken()
        router.push({ name: "admin.login" })
      }
    }
    isLoadingGates.value = false
  })

  return {
    gates,
    isLoadingGates,
  }
}

function useBookings(route: Route, router: VueRouter) {
  const isLoadingBookings = ref<boolean>(false)
  const bookings = ref<any>([])

  onMounted(async () => {
    isLoadingBookings.value = true
    const response = await api.admin.findBookingsOfFacility(route.params.id)
    if (response.wasSuccessful && response.data) {
      bookings.value = response.data.map(b => ({
        ...b,
        createdAt: b.createdAt ? formatDate(new Date(b.createdAt)) : null,
        verifiedAt: b.verifiedAt ? new Date(b.verifiedAt) : null,
        startedAt: b.startedAt ? new Date(b.startedAt) : null,
        stoppedAt: b.stoppedAt ? new Date(b.stoppedAt) : null,
        payedAt: b.payedAt ? new Date(b.payedAt) : null,
      }))
    } else {
      if (response.status === 401) {
        removeAccessToken()
        router.push({ name: "admin.login" })
      }
    }
    isLoadingBookings.value = false
  })

  return {
    bookings,
    isLoadingBookings,
  }
}
</script>

<style lang="scss" scoped>
.divider {
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: inline-flex;
  flex: 0 0 auto;
}

.v-card__actions > .v-btn.v-btn {
  padding: 0 16px;
}
</style>
