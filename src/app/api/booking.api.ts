import Vue from "vue"
import { plainToClass } from "class-transformer"
import { defaultApiConfig } from "@/config/api.config"
import { BookingModel } from "../models/booking.model"

const bookingApiConfig = {
  ...defaultApiConfig,
  url: `${defaultApiConfig.url || ""}/booking`,
}

export interface CreatedBookingDto {
  licensePlate: string
  mobileNumber: string
  facilityId: string
}

export const createBooking = async (
  data: CreatedBookingDto,
): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    method: "POST",
    data,
  })
  return plainToClass(BookingModel, response.data)
}

export const verifySmsToken = async (
  id: string,
  smsToken: string,
): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/verify`,
    method: "PUT",
    data: { smsToken },
  })
  return plainToClass(BookingModel, response.data)
}

export const retrySmsToken = async (id: string): Promise<void> => {
  await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/sms-retry`,
    method: "PUT",
  })
}

export const findOneBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}`,
  })
  return plainToClass(BookingModel, response.data)
}

export const deleteBooking = async (id: string): Promise<void> => {
  await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}`,
    method: "DELETE",
  })
}

export const startBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/start`,
    method: "PUT",
  })
  return plainToClass(BookingModel, response.data)
}

export const stopBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/stop`,
    method: "PUT",
  })
  return plainToClass(BookingModel, response.data)
}

export const payBooking = async (
  id: string,
  paymentId: string,
): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/pay`,
    method: "PUT",
    data: { paymentId },
  })
  return plainToClass(BookingModel, response.data)
}
