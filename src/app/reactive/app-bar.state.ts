import Vue from "vue";

interface AppBarState {
  title: null | string;
  hasBackButton: boolean;
}

const state = Vue.observable<AppBarState>({
  title: "",
  hasBackButton: true
});

const hasBackButton = () => state.hasBackButton;
const hasTitle = () => !!state.title;
const getTitle = () => state.title;

const setHasBackButton = (value: boolean) => (state.hasBackButton = value);
const setTitle = (value: string | null) => (state.title = value);

export const useAppBar = () => {
  return {
    hasBackButton,
    setHasBackButton,
    hasTitle,
    getTitle,
    setTitle
  };
};
