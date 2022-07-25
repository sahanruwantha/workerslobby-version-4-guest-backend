import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTicketDto } from './ticket-dto/create-ticket-dto';
import { Ticket } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async createTicket(ticket: CreateTicketDto) {
    const Ticket = await this.prisma.ticket.create({
      data: {
        ticketName: ticket.ticketName,
        ticketDescription: ticket.ticketDescription,
        clientId: parseInt(String(ticket.clientId)),
        state: true,
      },
    });
    return Ticket;
  }
}
