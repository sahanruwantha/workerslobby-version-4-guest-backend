import { Module } from '@nestjs/common';
import { ProjectManagerService } from './project-manager.service';
import { ProjectManagerController } from './project-manager.controller';

@Module({
  providers: [ProjectManagerService],
  controllers: [ProjectManagerController]
})
export class ProjectManagerModule {}
