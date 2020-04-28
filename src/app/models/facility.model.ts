import { GateModel } from "./gate.model"

export class FacilityModel {
  occupied!: number
  id!: string
  name!: string
  capacity!: number
  gates!: GateModel[]
  street!: string
  streetNumber!: string
  postalCode!: string
  city!: string
  images!: FacilityImages
  parkingHint!: TranslatedTexts
  description!: TranslatedTexts
  openingHours!: TranslatedTexts
}

export interface FacilityImages {
  folderName: string
  thumbnail: string
  categories: string
  map: string
  carousel: string[]
}

export interface TranslatedTexts {
  de: string
  en?: string
}