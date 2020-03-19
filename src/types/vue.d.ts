declare module "*.vue" {}

declare module "validator" {}

declare module "validator/es/lib/isMobilePhone" {
  function isMobilePhone(value: string): boolean;
  export default isMobilePhone;
}

declare module "validator/es/lib/isEmpty" {
  function isEmpty(value: string): boolean;
  export default isEmpty;
}
