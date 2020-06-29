import { ref } from "@vue/composition-api"
import { api } from "@/app/api"

export const useApiInformation = () => {
  const isPending = ref(false)
  const version = ref<string>(null)

  const getApiInformation = async (): Promise<void> => {
    isPending.value = true
    const apiInformation = await api.getApiInformation()
    if (apiInformation.wasSuccessful && apiInformation.data) {
      version.value = apiInformation.data.version
    }
    isPending.value = false
  }

  return {
    isPending,
    version,
    getApiInformation,
  }
}
