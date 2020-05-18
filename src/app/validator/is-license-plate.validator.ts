export const swissRegex = /^(AG|AI|AR|BE|BL|BS|FR|GE|GL|GR|JU|LU|M|NE|NW|OW|SG|SH|SO|SZ|TG|TI|UR|VD|VS|ZG|ZH)[1-9][0-9]{1,5}[U,Z]{0,1}$/gi
export const germanRegex = /^[A-ZÖÄÜ]{1,3}[-]{0,1}[A-Z]{0,3}[0-9]{1,5}[C,E]{0,1}$/gi
export const frenchRegex = /^([A-VX-Z]{2}[0-9]{3}[A-Z]{2})|([W]{1,2}[0-9]{3}[A-Z]{2})$/gi
export const frenchOldRegex = /^[0-9]{1,4}[A-Z]{1,3}([0-9]{1,3}|2[AB]|69[DM])$/gi

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
