import { GateModel } from "./gate.model"

export class FacilityModel {
  id!: string
  name!: string
  capacity!: number
  free!: number
  gates!: GateModel[]
  address!: Address
  geo!: Geo
  thumbnail!: string
  images!: FacilityImages
  parkingHint!: TranslatedTexts
  description!: TranslatedTexts
  openingHours!: TranslatedTexts

  get occupied(): number {
    return this.capacity - this.free
  }
}

export interface Geo {
  latitude: string
  longitude: string
}

export interface Address {
  street: string
  streetNumber: string
  postalCode: string
  city: string
}

export interface FacilityImages {
  folderName: string
  categories: string
  map: string
  carousel: string[]
}

export interface TranslatedTexts {
  de: string[]
  en?: string[]
  fr?: string[]
  it?: string[]
}
