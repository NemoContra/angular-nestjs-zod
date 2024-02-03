import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '@angular-nestjs-zod/shared/util/api-models';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { FlightService } from './flight.service';

@Component({
  standalone: true,
  selector: 'angular-nestjs-zod-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [JsonPipe],
})
export class AppComponent {
  private flightService = inject(FlightService);
  flights = toSignal(this.flightService.getFlights());

  updateFlight() {
    const newFlight: Flight = {
      from: 'STR',
      to: 'FRA',
      time: new Date().toISOString(),
      delayed: false,
    };
    this.flightService.createFlight(newFlight).subscribe(console.log);
  }
}
