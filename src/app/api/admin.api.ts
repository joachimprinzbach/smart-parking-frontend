import { Request, HttpResponse } from "./request"
import { BookingModel } from "../models/booking.model"
import { state } from "../reactive/admin.state"
import { FacilityModel } from "../models/facility.model"
import { GateModel } from "../models/gate.model"

export interface LoginDto {
  username: string
  password: string
}

const request = Request("/admin")

export async function findAllFacilities(): Promise<
  HttpResponse<FacilityModel[]>
> {
  return request()
    .method("GET")
    .url("/facility")
    .useBearer(state.accessToken || "")
    .isList()
    .returns(FacilityModel)
    .fire()
}

export async function findOneFacility(
  id: string,
): Promise<HttpResponse<FacilityModel>> {
  return request()
    .method("GET")
    .url(`/facility/${id}`)
    .useBearer(state.accessToken || "")
    .returns(FacilityModel)
    .fire()
}

export async function findAllGates(
  id: string,
): Promise<HttpResponse<GateModel[]>> {
  return request()
    .method("GET")
    .url(`/facility/${id}/gate`)
    .useBearer(state.accessToken || "")
    .isList()
    .returns(GateModel)
    .fire()
}

export async function findBookingsOfFacility(
  facilityId: string,
): Promise<HttpResponse<BookingModel[]>> {
  return request()
    .method("GET")
    .url(`/facility/${facilityId}/booking`)
    .useBearer(state.accessToken || "")
    .returns(BookingModel)
    .isList()
    .fire()
}

export async function openGate(
  facilityId: string,
  gateId: string,
): Promise<HttpResponse<void>> {
  return request()
    .method("PUT")
    .url(`/facility/${facilityId}/gate/${gateId}`)
    .useBearer(state.accessToken || "")
    .fire()
}
