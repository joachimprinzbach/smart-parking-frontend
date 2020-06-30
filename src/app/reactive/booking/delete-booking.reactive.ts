import { ref } from "@vue/composition-api"
import { api } from "../../api"

export function useDeleteBooking() {
  const isDeleteBookingPending = ref(false)

  async function deleteBooking(bookingId: string): Promise<void> {
    isDeleteBookingPending.value = true
    await api.deleteBooking(bookingId)
    isDeleteBookingPending.value = false
  }

  return { deleteBooking, isDeleteBookingPending }
}
