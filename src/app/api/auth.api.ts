import { Request, HttpResponse } from "./request"
import { LoginResponseModel } from "../models/login-response.model"

export interface LoginDto {
  username: string
  password: string
}

const request = Request("/auth")

export async function login(
  data: LoginDto,
): Promise<HttpResponse<LoginResponseModel>> {
  return request()
    .url("/login")
    .method("POST")
    .data(data)
    .returns(LoginResponseModel)
    .fire()
}
