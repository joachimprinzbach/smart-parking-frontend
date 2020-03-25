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
    method: "POST",
    data: { smsToken },
  })
  return plainToClass(BookingModel, response.data)
}

export const findOneBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}`,
  })
  return plainToClass(BookingModel, response.data)
}

export const startBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/start`,
    method: "POST",
  })
  return plainToClass(BookingModel, response.data)
}

export const stopBooking = async (id: string): Promise<BookingModel> => {
  const response = await Vue.$http.request({
    ...bookingApiConfig,
    url: `${bookingApiConfig.url}/${id}/stop`,
    method: "POST",
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
    method: "POST",
    data: { paymentId },
  })
  return plainToClass(BookingModel, response.data)
}
