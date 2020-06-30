import { ref } from "@vue/composition-api"
import { FacilityModel } from "../../models/facility.model"
import { HttpResponse } from "../../api/request"
import { api } from "../../api"

export const useAllFacilities = () => {
  const isPending = ref(false)
  const facilities = ref<FacilityModel[]>([])

  async function findAllFacilities(): Promise<HttpResponse<FacilityModel[]>> {
    isPending.value = true
    const response = await api.findAllFacilities()
    if (response.wasSuccessful && response.data) {
      facilities.value = response.data
    }
    isPending.value = false
    return response
  }

  return {
    isPending,
    facilities,
    findAllFacilities,
  }
}
