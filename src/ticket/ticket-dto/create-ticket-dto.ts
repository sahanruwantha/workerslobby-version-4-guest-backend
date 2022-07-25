import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  ticketName: string;

  @IsString()
  @IsNotEmpty()
  ticketDescription?: string;

  // @IsNumber()
  // @IsNotEmpty()
  clientId: number;
}
