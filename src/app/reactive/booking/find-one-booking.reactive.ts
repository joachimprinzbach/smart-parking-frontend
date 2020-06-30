import { ref } from "@vue/composition-api"
import { HttpResponse } from "../../api/request"
import { BookingModel } from "../../models/booking.model"
import { api } from "../../api"

export function useFindOneBooking() {
  const isBookingPending = ref(false)
  const booking = ref<BookingModel>(BookingModel.DEFAULT)

  async function findOneBooking(
    bookingId: string,
  ): Promise<HttpResponse<BookingModel>> {
    isBookingPending.value = true
    const response = await api.findOneBooking(bookingId)
    if (response.wasSuccessful && response.data) {
      booking.value.id = response.data.id
      booking.value.facilityId = response.data.facilityId
      booking.value.state = response.data.state
      booking.value.createdAt = new Date(response.data.createdAt as any)
      if (response.data.verifiedAt) {
        booking.value.verifiedAt = new Date(response.data.verifiedAt as any)
      }
      if (response.data.startedAt) {
        booking.value.startedAt = new Date(response.data.startedAt as any)
      }
      if (response.data.stoppedAt) {
        booking.value.stoppedAt = new Date(response.data.stoppedAt as any)
      }
    }

    isBookingPending.value = false
    return response
  }

  return {
    booking,
    isBookingPending,
    findOneBooking,
  }
}
