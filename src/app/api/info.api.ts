import Vue from "vue"
import { plainToClass } from "class-transformer"
import { defaultApiConfig } from "@/config/api.config"
import { ApiInformationModel } from "@/app/models/api-information.model"

export const getApiInformation = async (): Promise<ApiInformationModel> => {
  const response = await Vue.$http.request({
    ...defaultApiConfig,
  })
  return plainToClass(ApiInformationModel, response.data)
}
