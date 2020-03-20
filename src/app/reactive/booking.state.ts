import Vue from "vue"

export interface Booking {
  id: string
  state: string
  licencePlate: string
  startedAt: Date | null
  stoppedAt: Date | null
}

const booking = Vue.observable<Booking>({
  id: "",
  state: "",
  licencePlate: "",
  startedAt: new Date("03/20/2020 12:15"),
  stoppedAt: new Date(),
})

export const useBooking = () => ({
  booking,
})
