import { ref } from "@vue/composition-api"
import { FacilityModel } from "../models/facility.model"
import { api } from '../api'

export const useAllFacilities = () => {
  const isPending = ref(false)
  const facilities = ref<FacilityModel[]>([])

  const findAllFacilities = async (): Promise<void> => {
    isPending.value = true
    facilities.value = await api.findAllFacilities()
    isPending.value = false
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

  const findOneFacility = async (id: string): Promise<FacilityModel> => {
    isPending.value = true
    facility.value = await api.findOneFacility(id)
    isPending.value = false
    return facility.value
  }

  return {
    isPending,
    facility,
    findOneFacility,
  }
}
