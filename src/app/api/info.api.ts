import { ApiInformationModel } from "@/app/models/api-information.model"
import { Request, HttpResponse } from "./request"

const request = Request("")

export async function getApiInformation(): Promise<
  HttpResponse<ApiInformationModel>
> {
  return request()
    .method("GET")
    .returns(ApiInformationModel)
    .fire()
}
