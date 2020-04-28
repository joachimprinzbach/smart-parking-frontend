import { GatesModel } from "./gates.model"

export class BuildingModel {
  id!: string
  name!: string
  capacity!: number
  occupied!: number
  gates!: GatesModel[]
  // local attributes
  street!: string
  streetNumber!: string
  postalCode!: string
  city!: string
  images!: BuildingImages
  parkingHint!: TranslatedTexts
  description!: TranslatedTexts
  openingHours!: TranslatedTexts
}

export interface BuildingImages {
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