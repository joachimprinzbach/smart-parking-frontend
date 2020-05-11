export const mobilePhoneRegex = /^([+]{1})(((41)([0-9]{9}))|((49)([0-9]{2,12}))|((33)([0-9]{4,10})))$/g

export const isMobilePhone = (text: string): boolean => {
  console.log(text)
  return text
    .trim()
    .replace(/[-]/g, "")
    .replace(/[\s]/g, "")
    .match(mobilePhoneRegex)
    ? true
    : false
}
