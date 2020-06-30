import { ref } from "@vue/composition-api"
import { api } from "../../api"

export function useOpenGate() {
  const isOpenGatePending = ref(false)

  async function openGate(
    bookingId: string,
    facilityId: string,
    gateId: string,
  ) {
    isOpenGatePending.value = true
    const response = await api.openGate({
      gateId,
      facilityId,
      bookingId,
    })
    isOpenGatePending.value = false
    return response
  }

  return {
    openGate,
    isOpenGatePending,
  }
}
