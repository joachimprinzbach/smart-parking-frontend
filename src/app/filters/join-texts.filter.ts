import Vue from "vue"

export const joinTexts = (texts: string[]) => texts.join("<br/>")

Vue.filter("joinTexts", (texts: string[]) => {
  console.log(texts)
  return joinTexts(texts)
})
