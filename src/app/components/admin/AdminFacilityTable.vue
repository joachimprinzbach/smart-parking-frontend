<template>
  <v-card>
    <v-card-title>
      <h2 class="text-h5">{{ $t("admin.table.title") }}</h2>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('admin.table.search')"
        single-line
        hide-details
        class="pt-0"
      ></v-text-field>
    </v-card-title>

    <v-tabs
      grow
      centered
      color="primary"
      light
      background-color="blue-grey lighten-5"
      @change="tabChange"
    >
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab>{{ $t("admin.table.filter.current") }}</v-tab>
      <v-tab>{{ $t("admin.table.filter.payed") }}</v-tab>
      <v-tab>{{ $t("admin.table.filter.deleted") }}</v-tab>
    </v-tabs>

    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="10"
      :sort-by="['date']"
      :sort-desc="[false, true]"
      multi-sort
      show-expand
      single-expand
      class="elevation-2"
    >
      <template v-slot:item.state="{ item }">
        <v-chip
          class="ma-2"
          :color="getColor(item.state)"
          :text-color="getTextColor(item.state)"
        >
          {{ $t("admin.booking.state." + item.state.toLowerCase()) }}
        </v-chip>
      </template>
      <template v-slot:item.mobileNumber="{ item }">
        <a :href="'tel:' + item.mobileNumber">{{ item.mobileNumber }}</a>
      </template>
      <template v-slot:item.time="{ item }">
        <ParkTime :startedAt="item.startedAt" :stoppedAt="item.stoppedAt" />
      </template>
      <template v-slot:item.price="{ item }">
        <ParkPrice :startedAt="item.startedAt" :stoppedAt="item.stoppedAt" />
      </template>
      <!-- Expanden Body -->
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <AdminFacilityTableDetail :booking="item" />
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api"
import { formatStringDate } from "../../utils/date.util"
import { BookingState } from "../../models/booking-state"
import { BookingModel } from "../../models/booking.model"
import { appConfig } from "../../../config/app.config"
import ParkPrice from "@/app/components/booking/ParkPrice.vue"
import ParkTime from "@/app/components/booking/ParkTime.vue"
import AdminFacilityTableDetail from "@/app/components/admin/AdminFacilityTableDetail.vue"

export default defineComponent({
  components: {
    ParkTime,
    ParkPrice,
    AdminFacilityTableDetail,
  },
  props: {
    bookings: {
      type: Array as () => Array<BookingModel>,
      default: [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const headers = [
      {
        text: "Kontrollschild",
        value: "licensePlate",
        align: "start",
      },
      {
        text: "Telefon",
        value: "mobileNumber",
        align: "start",
      },
      {
        text: "Status",
        value: "state",
        align: "start",
      },
      {
        text: "Datum",
        value: "createdAt",
        align: "start",
      },
      {
        text: "Dauer",
        value: "time",
        align: "start",
        filterable: false,
        sortable: false,
      },
      {
        text: "Kosten",
        value: "price",
        align: "start",
        filterable: false,
        sortable: false,
      },
      {
        text: "Transaktion",
        value: "transactionId",
        align: "start",
      },
      { text: "", value: "data-table-expand" },
    ]

    const search = ref("")
    const tabIndex = ref(0)

    const url = computed(() => appConfig.appPath)

    const items = computed(() => {
      return props.bookings.filter((booking: BookingModel) => {
        if (booking) {
          switch (tabIndex.value) {
            case 0:
              return (
                [
                  BookingState.Verified,
                  BookingState.Started,
                  BookingState.Stopped,
                ].indexOf(booking.state as BookingState) >= 0
              )
            case 1:
              return BookingState.Payed === booking.state
            case 2:
              return BookingState.Deleted === booking.state
            default:
              return true
          }
        }
        return true
      })
    })

    function getColor(state: string) {
      switch (state) {
        case BookingState.Payed:
          return "green"

        case BookingState.Verified:
        case BookingState.Started:
          return "primary"

        case BookingState.Stopped:
          return "secondary"

        default:
          return ""
      }
    }

    function getTextColor(state: string) {
      switch (state) {
        case BookingState.Verified:
        case BookingState.Started:
        case BookingState.Payed:
          return "white"

        default:
          return "black"
      }
    }

    function tabChange(index: number) {
      tabIndex.value = index
    }

    return {
      url,
      search,
      formatStringDate,
      headers,
      getColor,
      getTextColor,
      tabChange,
      items,
    }
  },
})
</script>
