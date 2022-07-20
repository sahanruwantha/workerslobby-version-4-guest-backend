import { Module } from '@nestjs/common';
import { EngineerService } from './engineer.service';
import { EngineerService } from './engineer.service';

@Module({
  providers: [EngineerService]
})
export class EngineerModule {}
