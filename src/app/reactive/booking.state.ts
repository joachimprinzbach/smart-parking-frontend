import Vue from "vue"
import { ref } from "@vue/composition-api"
import { BookingModel } from "@/app/models/booking.model"
import { api } from "@/app/api"
import { HttpResponse } from "@/app/api/request"
import { CreatedBookingDto } from "@/app/api/booking.api"

const booking = Vue.observable<BookingModel>({
  id: "",
  facilityId: "",
  licensePlate: "",
  mobileNumber: "",
  refno: "",
  state: null,
  createdAt: null,
  verifiedAt: null,
  startedAt: null,
  stoppedAt: null,
})

export function useBooking() {
  const isPending = ref(false)

  async function createBooking(
    data: CreatedBookingDto,
  ): Promise<HttpResponse<BookingModel>> {
    isPending.value = true
    const response = await api.createBooking({
      facilityId: data.facilityId,
      hasAcceptedTermsOfService: data.hasAcceptedTermsOfService,
      licensePlate: data.licensePlate.trim().replace(/[\s]/g, ""),
      mobileNumber: data.mobileNumber
        .trim()
        .replace(/[-]/g, "")
        .replace(/[\s]/g, ""),
    })
    isPending.value = false
    if (response.wasSuccessful && response.data) {
      booking.id = response.data.id
      booking.facilityId = response.data.facilityId
      booking.state = response.data.state
      booking.createdAt = new Date(response.data.createdAt as any)
    }
    return response
  }

  async function retrySmsVerification(): Promise<void> {
    isPending.value = true
    try {
      await api.retryVerification(booking.id)
      isPending.value = false
    } catch (e) {
      isPending.value = false
      throw e
    }
  }

  async function verifyCode(code: string): Promise<HttpResponse<BookingModel>> {
    isPending.value = true
    const response = await api.verifyCode(booking.id, code)
    isPending.value = false
    if (response.wasSuccessful && response.data) {
      booking.state = response.data.state
      booking.verifiedAt = new Date(response.data.verifiedAt as any)
    }
    return response
  }

  async function startBooking(): Promise<HttpResponse<BookingModel>> {
    isPending.value = true
    const response = await api.startBooking(booking.id)
    isPending.value = false
    if (response.wasSuccessful && response.data) {
      booking.state = response.data.state
      booking.startedAt = new Date(response.data.startedAt as any)
    }
    return response
  }

  async function cancelBooking(): Promise<void> {
    isPending.value = true
    await api.deleteBooking(booking.id)
    isPending.value = false
  }

  async function stopBooking(): Promise<HttpResponse<BookingModel>> {
    isPending.value = true
    const response = await api.stopBooking(booking.id)
    isPending.value = false
    if (response.wasSuccessful && response.data) {
      booking.state = response.data.state
      booking.stoppedAt = new Date(response.data.stoppedAt as any)
    }
    return response
  }

  async function loadBooking(
    bookingId: string,
  ): Promise<HttpResponse<BookingModel>> {
    isPending.value = true
    const response = await api.findOneBooking(bookingId)
    if (response.wasSuccessful && response.data) {
      booking.id = response.data.id
      booking.facilityId = response.data.facilityId
      booking.state = response.data.state
      booking.createdAt = new Date(response.data.createdAt as any)
      if (response.data.verifiedAt) {
        booking.verifiedAt = new Date(response.data.verifiedAt as any)
      }
      if (response.data.startedAt) {
        booking.startedAt = new Date(response.data.startedAt as any)
      }
      if (response.data.stoppedAt) {
        booking.stoppedAt = new Date(response.data.stoppedAt as any)
      }
    }

    isPending.value = false
    return response
  }

  return {
    booking,
    isPending,
    createBooking,
    loadBooking,
    verifyCode,
    startBooking,
    stopBooking,
    cancelBooking,
    retrySmsVerification,
  }
}
