import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCampusDto } from './dto/create-campus.dto';
import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';
import { UploaderService } from 'src/services/Uploader/s3.service';

@Injectable()
export class CampusService extends PrismaClient implements OnModuleInit{
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly uploaderService: UploaderService) {
    super();
   }

  async onModuleInit() {
    await this.$connect();
  }
  async create(createCampusDto: CreateCampusDto, image: Express.Multer.File) {
    const campus = await this.campus.create({
      data: {
        ...CreateCampusDto,
        image: v4(),
      },
    });
     await this.uploaderService.upload(image, campus.image);
  }

  indOne(id: string) {
    return this.campus.findFirst({ where: { id } });
  }

  async remove(id: string) {
    const campus = await this.campus.delete({
      where: { id },
    })
    await this.uploaderService.delete(campus.image);
  }
}