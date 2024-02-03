import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { FlightService } from './flight.service';
import { ZodValidationPipe } from '../common/zod-validation-pipe';
import { Flight, flightSchema } from '@angular-nestjs-zod/shared/util/api-models';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  getFlights(): Flight[] {
    return this.flightService.getAllFlights();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(flightSchema))
  createFlight(@Body() flight: Flight): void {
    this.flightService.createFlight(flight);
  }
}
