import { BookingState } from "./booking-state"

export class BookingModel {
  id!: string
  facilityId!: string
  licensePlate!: string
  mobileNumber!: string
  refno!: string
  state!: BookingState | null
  createdAt!: Date | null
  verifiedAt!: Date | null
  startedAt!: Date | null
  stoppedAt!: Date | null
  payedAt!: Date | null
}
