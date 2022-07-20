import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TicketDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  clientId: number;
}

export class TaskDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  engineerId: number;
}
