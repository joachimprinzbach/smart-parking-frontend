export interface ParkingObject {
  id: string
  name: string
  street: string
  streetNumber: string
  postalCode: string
  city: string
  images: ParkingObjectImages
  description: TranslatedTexts
  openingHours: TranslatedTexts
}

export interface ParkingObjectImages {
  thumbnail: string
  categories: string
  map: string
  carousel: string[]
}

export interface TranslatedTexts {
  de: string
  en?: string
}
