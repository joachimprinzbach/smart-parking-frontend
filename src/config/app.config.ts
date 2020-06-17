export const appConfig = {
  env: process.env.VUE_APP_ENV_NAME as string,
  logEnabled: (process.env.VUE_APP_LOG_ENABLED as string) === "true",
  appPath: process.env.VUE_APP_PATH as string,
  apiPath: process.env.VUE_APP_API_PATH as string,
  storagePath: process.env.VUE_APP_STORAGE_PATH as string,
  version: JSON.parse(decodeURI(process.env.PACKAGE_JSON as string)).version,
  analytics: {
    apiKey: process.env.VUE_ANALYTICS_APIKEY as string,
    authDomain: process.env.VUE_ANALYTICS_AUTHDOMAIN as string,
    databaseURL: process.env.VUE_ANALYTICS_DATABASEURL as string,
    projectId: process.env.VUE_ANALYTICS_PROJECTID as string,
    storageBucket: process.env.VUE_ANALYTICS_STORAGEBUCKET as string,
    messagingSenderId: process.env.VUE_ANALYTICS_MESSAGINGSENDERID as string,
    appId: process.env.VUE_ANALYTICS_APPID as string,
    measurementId: process.env.VUE_ANALYTICS_MEASUREMENTID as string,
  },
}
