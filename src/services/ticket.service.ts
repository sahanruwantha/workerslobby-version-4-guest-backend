import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { TicketDTO } from 'src/dtos';
import { PrismaService } from './prisma.service';

@Injectable()
export class TicketService {
  constructor(private prismaService: PrismaService) {}

  async createTicket(dto: TicketDTO): Promise<Ticket> {
    const newTicket = await this.prismaService.ticket.create({
      data: {
        ticketName: dto.name,
        ticketDescription: dto.description,
        clientId: dto.clientId,
        state: true
      },
    });
    return newTicket;
  }

  
}
