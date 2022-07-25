import { Body, Controller, Get, Post } from "@nestjs/common";
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './ticket-dto/create-ticket-dto';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('create')
  createTicket(@Body() dto: CreateTicketDto) {
    console.log(typeof(parseInt(String(dto.clientId))));
    return this.ticketService.createTicket(dto);
  }

  @Get('get')
  get() {
    return 'test';
  }
}
