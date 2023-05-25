import { HttpClient } from '../infra/HttpClient';
import { Cep, HttpCep } from '../types/cep';

export class CepService implements HttpCep {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseURL: string,
  ) {}

  async getCep(cep: string): Promise<Cep> {
    if (cep.length < 8 || cep.length > 8) { throw new Error('CEP inválido') }

    const response = await this.httpClient.get<Cep>(`${this.baseURL}/${cep}/json/`);

    return response;
  }
}