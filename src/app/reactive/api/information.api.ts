import Vue from "vue";
import { ref } from "@vue/composition-api";
import { plainToClass } from "class-transformer";
import { defaultApiConfig } from "@/config/api.config";
import { ApiInformationModel } from "@/app/models/api-information.model";

export const useApiInformation = () => {
  const isPending = ref(false);
  const version = ref<string>(null);

  const getApiInformation = async () => {
    isPending.value = true;
    const response = await Vue.$http.request({ ...defaultApiConfig });
    const apiInformation = plainToClass(ApiInformationModel, response.data);
    version.value = apiInformation.version;
    isPending.value = false;
  };

  return {
    isPending,
    version,
    getApiInformation,
  };
};
