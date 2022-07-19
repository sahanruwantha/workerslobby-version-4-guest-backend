import { Ticket } from '@prisma/client';

export class TicketService {
  createTicket(ticket: Ticket): Ticket {
    return ticket;
  }
}
