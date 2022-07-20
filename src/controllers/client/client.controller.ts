import { Body, Controller, Post } from '@nestjs/common';
import { TicketDTO } from 'src/dtos';
import { TicketService } from 'src/services/ticket.service';

@Controller('client')
export class ClientController {

    constructor(private ticketService: TicketService){}

    @Post()
    createTicket(@Body() dto: TicketDTO): any{
        return this.ticketService.createTicket(dto);
    }
}
