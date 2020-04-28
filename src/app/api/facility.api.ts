import Vue from "vue"
import { plainToClass } from "class-transformer"
import { defaultApiConfig } from "@/config/api.config"
import { FacilityModel } from "../models/facility.model"

const facilityApiConfig = {
  ...defaultApiConfig,
  url: `${defaultApiConfig.url || ""}/facility`,
}

export const findAllFacilities = async (): Promise<FacilityModel[]> => {
  const response = await Vue.$http.request<any[]>(facilityApiConfig)
  return response.data.map(d => plainToClass(FacilityModel, d))
}

export const findOneFacility = async (id: string): Promise<FacilityModel> => {
  const response = await Vue.$http.request({
    ...facilityApiConfig,
    url: `${facilityApiConfig.url}/${id}`,
  })
  return plainToClass(FacilityModel, response.data)
}
