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

export const calculatePrice = (
  startedAt: Date,
  stoppedAt = new Date(),
): string => {
  if (startedAt) {
    const differenceInHours = Math.trunc(
      Math.abs(startedAt.getTime() - stoppedAt.getTime()) / 3600000 + 1,
    )
    const price = sumPrice(differenceInHours)
    return `CHF ${price}.-`
  }
  return "-"
}
