import { Request, HttpResponse } from "./request"
import { BookingModel } from "@/app/models/booking.model"
import { PaymentInformationModel } from "@/app/models/payment-information.model"

export interface CreatedBookingDto {
  licensePlate: string
  mobileNumber: string
  facilityId: string
  hasAcceptedTermsOfService: boolean
}

const request = Request("/booking")

export async function createBooking(
  data: CreatedBookingDto,
): Promise<HttpResponse<BookingModel>> {
  return request()
    .method("POST")
    .data(data)
    .returns(BookingModel)
    .fire()
}

export async function verifyCode(
  id: string,
  code: string,
): Promise<HttpResponse<BookingModel>> {
  return request()
    .method("PUT")
    .url(`/${id}/verify`)
    .data({ code })
    .returns(BookingModel)
    .fire()
}

export async function retryVerification(
  id: string,
): Promise<HttpResponse<void>> {
  return request()
    .method("PUT")
    .url(`/${id}/retry-verification`)
    .fire()
}

export async function findOneBooking(
  id: string,
): Promise<HttpResponse<BookingModel>> {
  return request()
    .method("GET")
    .url(`/${id}`)
    .returns(BookingModel)
    .fire()
}

export async function deleteBooking(id: string): Promise<HttpResponse<void>> {
  return request()
    .method("DELETE")
    .url(`/${id}`)
    .fire()
}

export async function startBooking(
  id: string,
): Promise<HttpResponse<BookingModel>> {
  return request()
    .method("PUT")
    .url(`/${id}/start`)
    .returns(BookingModel)
    .fire()
}

export async function stopBooking(
  id: string,
): Promise<HttpResponse<BookingModel>> {
  return request()
    .method("PUT")
    .url(`/${id}/stop`)
    .returns(BookingModel)
    .fire()
}

export async function getPaymentInformation(
  id: string,
): Promise<HttpResponse<PaymentInformationModel>> {
  return request()
    .method("GET")
    .url(`/${id}/pay`)
    .returns(PaymentInformationModel)
    .fire()
}

export async function requestReceipt(id: string): Promise<HttpResponse<void>> {
  return request()
    .method("PUT")
    .url(`/${id}/receipt`)
    .fire()
}
