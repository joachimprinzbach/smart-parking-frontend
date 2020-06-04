import { BookingModel } from "@/app/models/booking.model"

function sumPrice(differenceInHours: number): number {
  if (differenceInHours > 4) {
    if (differenceInHours > 24) {
      return 10 + sumPrice(differenceInHours - 24)
    } else {
      return 10
    }
  } else {
    return differenceInHours * 2
  }
}

export const calculatePriceRaw = (
  startedAt: Date,
  stoppedAt = new Date(),
): number => {
  if (startedAt) {
    const differenceInHours = Math.trunc(
      Math.abs(startedAt.getTime() - stoppedAt.getTime()) / 3600000 + 1,
    )
    return sumPrice(differenceInHours)
  }
  return 0
}

export const calculatePriceRawByBooking = (booking: BookingModel) => {
  if (booking) {
    return calculatePriceRaw(
      booking.startedAt as Date,
      booking.stoppedAt as Date,
    )
  }
  return 0
}

export const calculatePrice = (
  startedAt: Date,
  stoppedAt = new Date(),
): string => {
  if (startedAt) {
    return `CHF ${calculatePriceRaw(startedAt, stoppedAt)}.-`
  }
  return "-"
}
