import Vue from "vue"
import { plainToClass } from "class-transformer"
import { defaultApiConfig } from "@/config/api.config"
import { BuildingModel } from "../models/building.model"

const buildingApiConfig = {
  ...defaultApiConfig,
  url: `${defaultApiConfig.url || ""}/building`,
}

export const findAllBuildings = async (): Promise<BuildingModel[]> => {
  const response = await Vue.$http.request<any[]>(buildingApiConfig)
  return response.data.map(d => plainToClass(BuildingModel, d))
}

export const findOneBuilding = async (id: string): Promise<BuildingModel> => {
  const response = await Vue.$http.request({
    ...buildingApiConfig,
    url: `${buildingApiConfig.url}/${id}`,
  })
  return plainToClass(BuildingModel, response.data)
}
