import { ref } from "@vue/composition-api"
import { FacilityModel } from "../models/facility.model"
import { api } from "../api"
import { HttpResponse } from "../api/request"

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

export const useOneFacility = () => {
  const isPending = ref(false)
  const facility = ref<FacilityModel>(undefined)

  async function findOneFacility(
    id: string,
  ): Promise<HttpResponse<FacilityModel>> {
    isPending.value = true
    const response = await api.findOneFacility(id)
    if (response.wasSuccessful && response.data) {
      facility.value = response.data
    }
    isPending.value = false
    return response
  }

  return {
    isPending,
    facility,
    findOneFacility,
  }
}
