import Vue from "vue"
import { ref } from "@vue/composition-api"
import { BookingModel } from "../models/booking.model"
import { CreatedBookingDto } from "../api/booking.api"
import { api } from "../api"

const booking = Vue.observable<BookingModel>({
  id: "",
  licensePlate: "",
  mobileNumber: "",
  paymentId: "",
  state: null,
  startedAt: new Date(),
  stoppedAt: new Date(),
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
    return createdBooking
  }

  const verifySmsToken = async (smsToken: string): Promise<BookingModel> => {
    isPending.value = true
    const verifiedBooking = await api.verifySmsToken(booking.id, smsToken)
    isPending.value = false
    booking.state = verifiedBooking.state
    return verifiedBooking
  }

  const startBooking = async (): Promise<BookingModel> => {
    isPending.value = true
    const startedBooking = await api.startBooking(booking.id)
    isPending.value = false
    booking.state = startedBooking.state
    booking.startedAt = startedBooking.startedAt
    return startedBooking
  }

  const stopBooking = async (): Promise<BookingModel> => {
    isPending.value = true
    const stoppededBooking = await api.stopBooking(booking.id)
    isPending.value = false
    booking.state = stoppededBooking.state
    booking.startedAt = stoppededBooking.startedAt
    return stoppededBooking
  }

  const payBooking = async (paymentId: string): Promise<BookingModel> => {
    isPending.value = true
    const payedBooking = await api.payBooking(booking.id, paymentId)
    isPending.value = false
    booking.state = payedBooking.state
    return payedBooking
  }

  const loadBooking = async (bookingId: string): Promise<BookingModel> => {
    isPending.value = true
    const loadedBooking = await api.findOneBooking(bookingId)
    isPending.value = false
    booking.id = loadedBooking.id
    booking.state = loadedBooking.state
    booking.startedAt = new Date(loadedBooking.startedAt as any)
    if (loadedBooking.stoppedAt && loadedBooking.state === "STOPPED") {
      booking.stoppedAt = new Date(loadedBooking.stoppedAt as any)
    }
    return loadedBooking
  }

  return {
    booking,
    isPending,
    createBooking,
    loadBooking,
    verifySmsToken,
    startBooking,
    stopBooking,
    payBooking,
  }
}
