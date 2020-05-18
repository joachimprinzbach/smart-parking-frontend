import Vue from "vue"
import { plainToClass } from "class-transformer"
import { defaultApiConfig } from "@/config/api.config"
import { FacilityModel } from "../models/facility.model"
import { GateModel } from "../models/gate.model"

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

export const findAllGates = async (
  facilityId: string,
): Promise<GateModel[]> => {
  const response = await Vue.$http.request<any[]>({
    ...facilityApiConfig,
    url: `${facilityApiConfig.url}/${facilityId}/gate`,
  })
  return response.data.map(g => plainToClass(GateModel, g))
}

interface OpenGateRequest {
  facilityId: string
  gateId: string
  bookingId: string
}

export const openGate = async (option: OpenGateRequest): Promise<void> => {
  await Vue.$http.request<any[]>({
    ...facilityApiConfig,
    method: "PUT",
    url: `${facilityApiConfig.url}/${option.facilityId}/gate/${option.gateId}`,
    data: {
      bookingId: option.bookingId,
    },
  })
}
