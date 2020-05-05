import Vue from "vue"

export const joinTexts = (texts: string[]) => texts.join("<br/>")

Vue.filter("joinTexts", (texts: string[]) => joinTexts(texts))
