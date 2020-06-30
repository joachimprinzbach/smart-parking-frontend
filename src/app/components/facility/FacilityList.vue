<template>
  <v-skeleton-loader class="mx-auto" type="image" :loading="isPending">
    <br />
    <FacilityListItem
      v-for="facility in facilities"
      :key="facility.id"
      :facility="facility"
    />
  </v-skeleton-loader>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAllFacilities } from "@/app/reactive/facility"
import FacilityListItem from "@/app/components/facility/FacilityListItem.vue"

export default defineComponent({
  components: {
    FacilityListItem,
  },
  setup() {
    const { findAllFacilities, facilities, isPending } = useAllFacilities()

    onMounted(() => findAllFacilities())

    return {
      isPending,
      facilities,
    }
  },
})
</script>
