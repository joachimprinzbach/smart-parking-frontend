<template>
  <section>
    <v-skeleton-loader
      class="mx-auto"
      type="image"
      v-if="isPending"
    >
    </v-skeleton-loader>
    <div v-if="!isPending">
      <FacilityListItem
        v-for="facility in facilities"
        :key="facility.id"
        :facility="facility"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api"
import { useAllFacilities } from "@/app/reactive/facility"
import FacilityListItem from "@/app/components/facility/FacilityListItemLarge.vue"

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
