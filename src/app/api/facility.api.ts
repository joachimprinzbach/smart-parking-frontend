import { Request, HttpResponse } from "./request"
import { FacilityModel } from "../models/facility.model"
import { GateModel } from "../models/gate.model"

const request = Request("/facility")

export async function findAllFacilities(): Promise<
  HttpResponse<FacilityModel[]>
> {
  return request()
    .method("GET")
    .isList()
    .returns(FacilityModel)
    .fire()
}

export async function findOneFacility(
  id: string,
): Promise<HttpResponse<FacilityModel>> {
  return request()
    .method("GET")
    .url(`/${id}`)
    .returns(FacilityModel)
    .fire()
}

export async function findAllGates(
  id: string,
): Promise<HttpResponse<GateModel[]>> {
  return request()
    .method("GET")
    .url(`/${id}/gate`)
    .isList()
    .returns(GateModel)
    .fire()
}

interface OpenGateRequest {
  facilityId: string
  gateId: string
  bookingId: string
}

export async function openGate(
  option: OpenGateRequest,
): Promise<HttpResponse<void>> {
  return request()
    .method("PUT")
    .url(`/${option.facilityId}/gate/${option.gateId}`)
    .data({ bookingId: option.bookingId })
    .fire()
}
