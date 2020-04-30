import Vue from "vue"
import { appConfig } from "../../config/app.config"

Vue.filter("firebaseStorage", (fileName: string, folderName: string) => {
  return `${appConfig.storagePath}/${folderName}%2F${fileName}?alt=media`
})