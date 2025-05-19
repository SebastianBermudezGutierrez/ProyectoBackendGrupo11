import { Module } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CampusController } from './campus.controller';
import { UploaderService } from 'src/services/Uploader/s3.service';

@Module({
  controllers: [CampusController],
  providers: [CampusService, UploaderService],
})
export class CampusModule {}
