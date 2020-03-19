declare module "*.vue" {}

declare module "validator" {}

declare module "validator/es/lib/isMobilePhone" {
  function isMobilePhone(value: string): boolean
  export default isMobilePhone
}

declare module "validator/es/lib/isEmpty" {
  function isEmpty(value: string): boolean
  export default isEmpty
}

declare module "validator/es/lib/isNumeric" {
  function isNumeric(value: string): boolean
  export default isNumeric
}

declare module "validator/es/lib/isLength" {
  function isLength(
    value: string,
    options: { min: number; max: number },
  ): boolean
  export default isLength
}
