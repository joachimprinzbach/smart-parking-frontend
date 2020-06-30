import { BookingState } from "./booking-state"

export class BookingModel {
  id!: string
  facilityId!: string
  licensePlate!: string
  mobileNumber!: string
  refno!: string
  transactionId!: string
  state!: BookingState | null
  createdAt!: Date | null
  verifiedAt!: Date | null
  startedAt!: Date | null
  stoppedAt!: Date | null
  payedAt!: Date | null

  static DEFAULT: BookingModel = {
    id: "",
    facilityId: "",
    licensePlate: "",
    mobileNumber: "",
    refno: "",
    transactionId: "",
    state: null,
    createdAt: null,
    verifiedAt: null,
    startedAt: null,
    stoppedAt: null,
    payedAt: null,
  }
}
