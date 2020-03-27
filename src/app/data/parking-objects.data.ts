import { ParkingObject } from "./parking-object"

export const parkingObjects: ParkingObject[] = [
  {
    id: "picasso",
    name: "Picasso Platz",
    street: "Lautengartenstrasse",
    streetNumber: "6",
    postalCode: "4052",
    city: "Basel",
    images: {
      thumbnail: "picasso/thumbnail.jpeg",
      map: "picasso/map.svg",
      categories: "picasso/categories.svg",
      carousel: [
        "picasso/image-01.jpeg",
        "picasso/image-02.jpeg",
        "picasso/image-03.jpeg",
        "picasso/image-04.jpg",
        "picasso/image-05.jpg",
        "picasso/image-06.jpg",
        "picasso/image-07.jpg",
        "picasso/image-08.jpg",
      ],
    },
    parkingHint: {
      de:
        "Smart Parking Parkplätze im 2. UG (Siehe Markierung)",
    },
    openingHours: {
      de:
        "7 - 18 Uhr / Montag - Freitag<br/>Ausserhalb der Öffnungszeiten ist das Gebäude geschlossen. Du kannst Dein Auto über Nacht im Parkhaus stehen lassen.",
    },
    description: {
      de: "Wähle einen Parkplatz aus, der mit Smart Parking gekennzeichnet ist.",
    },
  },
]
