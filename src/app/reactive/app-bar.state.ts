import Vue from "vue";

const state = Vue.observable({
  hasBackButton: true
});

export const hasBackButton = () => state.hasBackButton

export const setHasBackButton = (value: boolean) => state.hasBackButton = value
