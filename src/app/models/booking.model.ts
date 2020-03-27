import { BookingState } from "./booking-state"

export class BookingModel {
  id!: string
  licensePlate!: string
  mobileNumber!: string
  paymentId!: string
  state!: BookingState | null
  startedAt!: Date | null
  stoppedAt!: Date | null
}
