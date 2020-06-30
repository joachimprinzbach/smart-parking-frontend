import { ref, Ref } from "@vue/composition-api"
import { HttpResponse } from "../../api/request"
import { BookingModel } from "../../models/booking.model"
import { api } from "../../api"

export function useStartBooking() {
  const isStartBookingPending = ref(false)

  async function startBooking(
    booking: Ref<BookingModel>,
  ): Promise<HttpResponse<BookingModel>> {
    isStartBookingPending.value = true
    const response = await api.startBooking(booking.value.id)
    isStartBookingPending.value = false
    if (response.wasSuccessful && response.data) {
      booking.value.state = response.data.state
      booking.value.startedAt = new Date(response.data.startedAt as any)
    }
    return response
  }

  return { startBooking, isStartBookingPending }
}
