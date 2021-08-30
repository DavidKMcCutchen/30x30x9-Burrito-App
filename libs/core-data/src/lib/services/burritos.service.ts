import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Burrito } from "@burritos/api-interfaces";
import { BurritoEnvironment, BURRITO_ENVIRONMENT } from "@burritos/environment";


@Injectable({
  providedIn: 'root'
})
export class BurritosService {
  model = 'burritos';

  constructor(
    private httpClient: HttpClient,
    @Inject(BURRITO_ENVIRONMENT) private environment: BurritoEnvironment
  ) {}

  all() {
    return this.httpClient.get<Burrito[]>(this.getUrl())
  };

  find(burritoId: string) {
    return this.httpClient.get<Burrito>(this.getUrlById(burritoId))
  };

  create(burritos: Burrito) {
    return this.httpClient.post<Burrito>(this.getUrl(), burritos)
  };

  update(burritos: Burrito) {
    return this.httpClient.patch<Burrito>(this.getUrlById(burritos.id), burritos)
  };

  delete({ id }: Burrito) {
    return this.httpClient.delete<Burrito>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
