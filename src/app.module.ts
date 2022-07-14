import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineerController } from './Controllers/engineer/engineer.controller';
import { PrjectManagerController } from './Controllers/prject-manager/prject-manager.controller';
import { ClientController } from './Controllers/client/client.controller';

@Module({
  imports: [],
  controllers: [AppController, EngineerController, PrjectManagerController, ClientController],
  providers: [AppService],
})
export class AppModule {}
