import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  payBooking,
  verifyCode,
  retryVerification,
  deleteBooking,
} from "./booking.api"
import { getApiInformation } from "./info.api"

export const api = {
  retryVerification,
  getApiInformation,
  createBooking,
  findOneBooking,
  verifyCode,
  startBooking,
  stopBooking,
  payBooking,
  deleteBooking,
}
