import { HttpClient } from "./HttpClient";
import axios, { AxiosResponse } from "axios";

export class AxiosAdapter implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return this.handleResponse(response);
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await axios.post<T>(url, body);
    return this.handleResponse(response);
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const response = await axios.put<T>(url, body);
    return this.handleResponse(response);
  }

  async delete<T>(url: string): Promise<T> {
    const response = await axios.delete<T>(url);
    return this.handleResponse(response);
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    const { status } = response;
    const possibleStatus = [400, 404, 500];
    const authStatus = [401, 403];

    if (possibleStatus.includes(status)) {
      throw new Error("Status inválido");
    }

    if (authStatus.includes(status)) {
      throw new Error("Não autorizado");
    }

    return response.data;
  }
}