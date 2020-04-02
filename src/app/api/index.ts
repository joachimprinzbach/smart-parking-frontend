import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  payBooking,
  verifySmsToken,
  retrySmsToken,
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
}
