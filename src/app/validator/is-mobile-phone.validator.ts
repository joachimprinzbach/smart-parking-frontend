export const mobilePhoneRegex = /^([+]{1})((417[5-9][0-9]{7})|(49(15[1,2,5-9]{2}[0-9]{7}|1[67][0-9]{9}))|(33[0-9]{4,10}))$/g

export const isMobilePhone = (text: string): boolean => {
  return text
    .trim()
    .replace(/[-]/g, "")
    .replace(/[\s]/g, "")
    .match(mobilePhoneRegex)
    ? true
    : false
}
