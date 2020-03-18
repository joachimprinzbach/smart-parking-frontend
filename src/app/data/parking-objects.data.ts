import { ParkingObject } from "./parking-object";

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
      ],
    },
    openingHours: {
      de: "7 - 18 Uhr / Montag - Freitag<br/>Ausserhalb der Öffnungszeiten ist das Gebäude geschlossen.",
    },
    description: {
      de: "",
    },
  },
];
