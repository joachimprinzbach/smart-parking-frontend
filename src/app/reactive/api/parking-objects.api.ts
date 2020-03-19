import { ref } from "@vue/composition-api"
import { parkingObjects as data } from "@/app/data/parking-objects.data"
import { ParkingObject } from "@/app/data/parking-object"

export const useAllParkingObjects = () => {
  const isPending = ref(false)
  const parkingObjects = ref<ParkingObject[]>([])

  const findAllParkingObjects = async () => {
    parkingObjects.value = data
  }

  return {
    isPending,
    parkingObjects,
    findAllParkingObjects,
  }
}

export const useOneParkingObjects = () => {
  const isPending = ref(false)
  const parkingObject = ref<ParkingObject>(null)

  const findOneParkingObject = async (id: string) => {
    parkingObject.value = data.find(d => d.id === id) || null
  }

  return {
    isPending,
    parkingObject,
    findOneParkingObject,
  }
}
