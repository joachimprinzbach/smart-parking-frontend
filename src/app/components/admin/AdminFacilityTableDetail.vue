<template>
  <section v-if="booking">
    <h3 class="text-h6 pt-2 pb-3">{{ $t("admin.table.row.title") }}</h3>
    <AdminFacilityTableDetailRow
      label="admin.table.detail.id"
      :value="booking.id"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.transaction"
      :value="booking.transactionId"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.refno"
      :value="booking.refno"
    />
    <AdminFacilityTableDetailRow label="admin.table.detail.link">
      <a :href="url + '/booking/' + booking.id" target="_blank">
        {{ url + "/booking/" + booking.id }}
      </a>
    </AdminFacilityTableDetailRow>
    <v-divider />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.verifiedAt"
      :value="formatStringDate(booking.verifiedAt || '')"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.reservedAt"
      :value="formatStringDate(booking.reservedAt || '')"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.startedAt"
      :value="formatStringDate(booking.startedAt || '')"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.stoppedAt"
      :value="formatStringDate(booking.stoppedAt || '')"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.payedAt"
      :value="formatStringDate(booking.payedAt || '')"
    />
    <AdminFacilityTableDetailRow
      label="admin.table.detail.deletedAt"
      :value="formatStringDate(booking.deletedAt || '')"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"
import { BookingModel } from "../../models/booking.model"
import { formatStringDate } from "../../utils/date.util"
import { appConfig } from "../../../config/app.config"
import AdminFacilityTableDetailRow from "@/app/components/admin/AdminFacilityTableDetailRow.vue"

export default defineComponent({
  components: {
    AdminFacilityTableDetailRow,
  },
  props: {
    booking: {
      type: Object as () => BookingModel,
      default: {},
    },
  },
  setup() {
    const url = computed(() => appConfig.appPath)

    return { url, formatStringDate }
  },
})
</script>

<style lang="scss" scoped>
section {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
