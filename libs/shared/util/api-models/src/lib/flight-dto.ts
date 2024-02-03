import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class FlightDto {
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  from: string;

  @IsString()
  @MinLength(5)
  @MaxLength(100)
  to: string;

  @IsDateString()
  time: string;

  @IsBoolean()
  delayed: boolean;
}
