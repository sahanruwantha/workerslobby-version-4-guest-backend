import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineerController } from './controllers/engineer/engineer.controller';
import { ClientController } from './controllers/client/client.controller';
import { ProjectManagerController } from './controllers/project-manager/project-manager.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, EngineerController, ClientController, ProjectManagerController],
  providers: [AppService],
})
export class AppModule {}
