import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class TicketService {
  constructor(private prismaService: PrismaService) {}
  createTicket(ticket: Ticket): Ticket {
    this.prismaService.ticket.create;
    return ticket;
  }
}
