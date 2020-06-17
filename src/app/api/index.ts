import {
  findOneBooking,
  createBooking,
  startBooking,
  stopBooking,
  verifyCode,
  retryVerification,
  deleteBooking,
  getPaymentInformation,
  requestReceipt,
} from "./booking.api"
import {
  findAllFacilities,
  findOneFacility,
  findAllGates,
  openGate,
} from "./facility.api"
import { getApiInformation } from "./info.api"
import { login } from "./auth.api"
import {
  findBookingsOfFacility,
  openGate as adminOpenGate,
  findOneFacility as adminFindOneFacility,
  findAllFacilities as adminFindAllFacilities,
  findAllGates as adminFindAllGates,
} from "./admin.api"

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
  getPaymentInformation,
  requestReceipt,
  admin: {
    login,
    findBookingsOfFacility,
    openGate: adminOpenGate,
    findOneFacility: adminFindOneFacility,
    findAllFacilities: adminFindAllFacilities,
    findAllGates: adminFindAllGates,
  },
}
