import { ref } from "@vue/composition-api"
import { api } from '../api'

export const useApiInformation = () => {
  const isPending = ref(false)
  const version = ref<string>(null)

  const getApiInformation = async (): Promise<void> => {
    isPending.value = true
    const apiInformation = await api.getApiInformation()
    version.value = apiInformation.version
    isPending.value = false
  }

  return {
    isPending,
    version,
    getApiInformation,
  }
}
