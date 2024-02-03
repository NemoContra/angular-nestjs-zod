import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '@angular-nestjs-zod/shared/util/api-models';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private readonly httpClient = inject(HttpClient);

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('/api/flights');
  }

  createFlight(newFlight: Flight): Observable<Flight> {
    return this.httpClient.post<Flight>('/api/flights', newFlight);
  }
}
