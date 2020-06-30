import { ref, Ref } from "@vue/composition-api"
import { HttpResponse } from "../../api/request"
import { BookingModel } from "../../models/booking.model"
import { api } from "../../api"

export function useStopBooking() {
    const isStopBookingPending = ref(false)
  
    async function stopBooking(
      booking: Ref<BookingModel>,
    ): Promise<HttpResponse<BookingModel>> {
      isStopBookingPending.value = true
      const response = await api.stopBooking(booking.value.id)
      isStopBookingPending.value = false
      if (response.wasSuccessful && response.data) {
        booking.value.state = response.data.state
        booking.value.stoppedAt = new Date(response.data.stoppedAt as any)
      }
      return response
    }
  
    return { stopBooking, isStopBookingPending }
  }