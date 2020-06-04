import Vue from "vue"
import { plainToClass } from "class-transformer"
import { ClassType } from "class-transformer/ClassTransformer"
import { defaultApiConfig } from "@/config/api.config"

export interface HttpResponse<T> {
  status: number
  wasSuccessful: boolean
  data?: T
  error?: { message: string }
}

export interface Config {
  url?: string
}

class RequestBuilder {
  private _method: "GET" | "POST" | "PUT" | "DELETE" = "GET"
  private _isList = false
  private _url = ""
  private _data: any = undefined
  private _config: Config = {}
  private _returnType: ClassType<any> | undefined = undefined

  constructor(config: Config = {}) {
    this._config = {
      ...defaultApiConfig,
      ...config,
    }
  }

  method(method: "GET" | "POST" | "PUT" | "DELETE"): RequestBuilder {
    this._method = method
    return this
  }

  url(url: string): RequestBuilder {
    this._url = url
    return this
  }

  data(data: any): RequestBuilder {
    this._data = data
    return this
  }

  isList(): RequestBuilder {
    this._isList = true
    return this
  }

  returns(returnType: ClassType<any>): RequestBuilder {
    this._returnType = returnType
    return this
  }

  private async _fire() {
    try {
      const response = await Vue.$http.request({
        ...this._config,
        url: `${this._config.url || ""}${this._url}`,
        method: this._method || "GET",
        data: this._data,
      })

      return this._buildHttpResponse(response)
    } catch (error) {
      if (error && error.response) {
        return this._buildHttpResponse(error.response)
      }
      throw error
    }
  }

  private _buildHttpResponse(response: any) {
    return {
      wasSuccessful: response.status < 400,
      status: response.status,
      data: response.data,
    }
  }

  async fire<Body = undefined>(): Promise<HttpResponse<Body>> {
    try {
      const response = await Vue.$http.request({
        ...this._config,
        url: `${this._config.url || ""}${this._url}`,
        method: this._method || "GET",
        data: this._data,
      })

      if (this._returnType) {
        if (this._isList) {
          response.data = response.data.map((d: any) =>
            plainToClass(this._returnType as ClassType<any>, d),
          )
        } else {
          response.data = plainToClass(this._returnType, response.data)
        }
      }

      return {
        wasSuccessful: response.status < 400,
        status: response.status,
        data: response.data,
      }
    } catch (error) {
      if (error && error.response) {
        return {
          wasSuccessful: false,
          status: error.response.status,
          error: error.response.data,
        }
      }
      throw error
    }
  }
}

export const Request = (url: string) => () => {
  return new RequestBuilder({
    url: `${defaultApiConfig.url || ""}${url}`,
  })
}
