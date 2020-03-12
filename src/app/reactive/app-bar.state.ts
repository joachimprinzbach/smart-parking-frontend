import Vue from "vue";
import { computed } from "@vue/composition-api";

interface AppBarState {
  title: null | string;
  hasBackButton: boolean;
}

const state = Vue.observable<AppBarState>({
  title: "",
  hasBackButton: true,
});

const title = computed(() => state.title);
const hasTitle = computed(() => !!state.title);
const hasBackButton = computed(() => state.hasBackButton);

const setHasBackButton = (value: boolean) => (state.hasBackButton = value);
const setTitle = (value: string | null) => (state.title = value);

export const useAppBar = () => {
  return {
    hasBackButton,
    setHasBackButton,
    hasTitle,
    title,
    setTitle,
  };
};
