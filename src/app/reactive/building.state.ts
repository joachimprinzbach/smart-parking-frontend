import { ref } from "@vue/composition-api"
import {
  findAllBuildings as apiFindAllBuildings,
  findOneBuilding as apiFindOneBuilding,
} from "../api/building.api"
import { BuildingModel } from "../models/building.model"

export const useAllBuildings = () => {
  const isPending = ref(false)
  const buildings = ref<BuildingModel[]>([])

  const findAllBuildings = async (): Promise<void> => {
    isPending.value = true
    buildings.value = await apiFindAllBuildings()
    isPending.value = false
  }

  return {
    isPending,
    buildings,
    findAllBuildings,
  }
}

export const useOneBuilding = () => {
  const isPending = ref(false)
  const building = ref<BuildingModel>(undefined)

  const findOneBuilding = async (id: string): Promise<BuildingModel> => {
    isPending.value = true
    building.value = await apiFindOneBuilding(id)
    isPending.value = false
    return building.value
  }

  return {
    isPending,
    building,
    findOneBuilding,
  }
}
