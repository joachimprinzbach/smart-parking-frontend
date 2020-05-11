import Vue from "vue"
import { ref } from "@vue/composition-api"
import { BookingModel } from "../models/booking.model"
import { CreatedBookingDto } from "../api/booking.api"
import { api } from "../api"
import VueRouter from "vue-router"

const booking = Vue.observable<BookingModel>({
  id: "",
  facilityId: "",
  licensePlate: "",
  mobileNumber: "",
  paymentId: "",
  state: null,
  createdAt: null,
  verifiedAt: null,
  startedAt: null,
  stoppedAt: null,
})

export const useBooking = () => {
  const isPending = ref(false)

  const createBooking = async (
    data: CreatedBookingDto,
  ): Promise<BookingModel> => {
    isPending.value = true
    const createdBooking = await api.createBooking(data)
    isPending.value = false
    booking.id = createdBooking.id
    booking.state = createdBooking.state
    booking.createdAt = new Date(createdBooking.createdAt as any)
    return createdBooking
  }

  const retrySmsVerification = async (): Promise<void> => {
    isPending.value = true
    try {
      await api.retryVerification(booking.id)
      isPending.value = false
    } catch (e) {
      isPending.value = false
      throw e
    }
  }

  const verifyCode = async (code: string): Promise<BookingModel> => {
    isPending.value = true
    try {
      const verifiedBooking = await api.verifyCode(booking.id, code)
      isPending.value = false
      booking.state = verifiedBooking.state
      booking.verifiedAt = new Date(verifiedBooking.verifiedAt as any)
      return verifiedBooking
    } catch (e) {
      isPending.value = false
      throw e
    }
  }

  const startBooking = async (): Promise<BookingModel> => {
    isPending.value = true
    const startedBooking = await api.startBooking(booking.id)
    isPending.value = false
    booking.state = startedBooking.state
    booking.startedAt = new Date(startedBooking.startedAt as any)
    return startedBooking
  }

  const cancelBooking = async (): Promise<void> => {
    isPending.value = true
    await api.deleteBooking(booking.id)
    isPending.value = false
  }

  const stopBooking = async (): Promise<BookingModel> => {
    isPending.value = true
    const stoppededBooking = await api.stopBooking(booking.id)
    isPending.value = false
    booking.state = stoppededBooking.state
    booking.stoppedAt = new Date(stoppededBooking.stoppedAt as any)
    return stoppededBooking
  }

  const payBooking = async (paymentId: string): Promise<BookingModel> => {
    isPending.value = true
    const payedBooking = await api.payBooking(booking.id, paymentId)
    isPending.value = false
    booking.state = payedBooking.state
    return payedBooking
  }

  const loadBooking = async (
    router: VueRouter,
    bookingId: string,
  ): Promise<BookingModel | undefined> => {
    isPending.value = true
    try {
      const loadedBooking = await api.findOneBooking(bookingId)
      isPending.value = false
      booking.id = loadedBooking.id
      booking.facilityId = loadedBooking.facilityId
      booking.state = loadedBooking.state
      booking.createdAt = new Date(loadedBooking.createdAt as any)
      if (loadedBooking.verifiedAt && loadedBooking.state === "VERIFIED") {
        booking.verifiedAt = new Date(loadedBooking.verifiedAt as any)
      }
      if (loadedBooking.startedAt && loadedBooking.state === "STARTED") {
        booking.startedAt = new Date(loadedBooking.startedAt as any)
      }
      if (loadedBooking.stoppedAt && loadedBooking.state === "STOPPED") {
        booking.stoppedAt = new Date(loadedBooking.stoppedAt as any)
      }
      return loadedBooking
    } catch (e) {
      isPending.value = false
      router.replace({ name: "not-found" })
    }
  }

  return {
    booking,
    isPending,
    createBooking,
    loadBooking,
    verifyCode,
    startBooking,
    stopBooking,
    payBooking,
    cancelBooking,
    retrySmsVerification,
  }
}
