import { ref } from "@vue/composition-api"
import { FacilityModel } from "../../models/facility.model"
import { HttpResponse } from "../../api/request"
import { api } from "../../api"

export const useFindOneFacility = () => {
  const isFacilityPending = ref(false)
  const facility = ref<FacilityModel | null>(null)

  async function findOneFacility(
    id: string,
  ): Promise<HttpResponse<FacilityModel>> {
    isFacilityPending.value = true
    const response = await api.findOneFacility(id)
    if (response.wasSuccessful && response.data) {
      facility.value = response.data
    }
    isFacilityPending.value = false
    return response
  }

  return {
    isFacilityPending,
    facility,
    findOneFacility,
  }
}
