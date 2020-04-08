import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  payBooking,
  verifySmsToken,
  retrySmsToken,
  deleteBooking,
} from "./booking.api"
import { getApiInformation } from "./info.api"

export const api = {
  retrySmsToken,
  getApiInformation,
  createBooking,
  findOneBooking,
  verifySmsToken,
  startBooking,
  stopBooking,
  payBooking,
  deleteBooking,
}
