import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineerController } from './Controllers/engineer/engineer.controller';
import { ClientController } from './Controllers/client/client.controller';
import { ProjectManagerController } from './Controllers/project-manager/project-manager.controller';

@Module({
  imports: [],
  controllers: [AppController, EngineerController, ClientController, ProjectManagerController],
  providers: [AppService],
})
export class AppModule {}
