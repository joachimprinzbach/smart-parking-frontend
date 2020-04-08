import { BookingState } from "./booking-state"

export class BookingModel {
  id!: string
  licensePlate!: string
  mobileNumber!: string
  paymentId!: string
  state!: BookingState | null
  createdAt!: Date | null
  startedAt!: Date | null
  stoppedAt!: Date | null
}
