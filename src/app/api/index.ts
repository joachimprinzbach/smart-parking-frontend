import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  payBooking,
  verifySmsToken,
} from "./booking.api"
import { getApiInformation } from "./info.api"

export const api = {
  getApiInformation,
  createBooking,
  findOneBooking,
  verifySmsToken,
  startBooking,
  stopBooking,
  payBooking,
}
