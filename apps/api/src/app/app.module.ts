import { Module } from '@nestjs/common';
import { FlightController } from './flight/flight.controller';
import { FlightService } from './flight/flight.service';

@Module({
  controllers: [FlightController],
  providers: [FlightService],
})
export class AppModule {}
