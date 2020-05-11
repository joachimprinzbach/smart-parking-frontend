export const swissRegex = /^(([A-Z]{1,4}))([0-9]{1,6})([A-Z]{0,1})$/g
export const germanRegex = /^([A-Z]{1,4})([0-9-]{1,6})$/g
export const frenchRegex = /^([A-Z]{1,2})([0-9]{1,3})([A-Z]{1,2})$/g
export const frenchOldRegex = /^([0-9]{1,3})([A-Z]{1,3})([0-9]{1,3})$/g

export const isLicensePlate = (text: string): boolean => {
  const value = text.trim().replace(/[\s]/g, "")

  if (
    value.match(swissRegex) ||
    value.match(germanRegex) ||
    value.match(frenchRegex) ||
    value.match(frenchOldRegex)
  ) {
    return true
  }

  return false
}
