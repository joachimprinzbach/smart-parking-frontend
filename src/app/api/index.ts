import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  verifyCode,
  retryVerification,
  deleteBooking,
} from "./booking.api"
import {
  findAllFacilities,
  findOneFacility,
  findAllGates,
  openGate,
} from "./facility.api"
import { getApiInformation } from "./info.api"

export const api = {
  retryVerification,
  getApiInformation,
  createBooking,
  findOneBooking,
  verifyCode,
  startBooking,
  stopBooking,
  deleteBooking,
  findAllFacilities,
  findOneFacility,
  findAllGates,
  openGate,
}
