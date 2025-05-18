import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCampusDto } from './dto/create-campus.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CampusService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createCampusDto: CreateCampusDto) {
    return this.campus.create({
      data: createCampusDto
    })
  }

  findOne() {
    return this.campus.findFirst();
  }


  remove(id: string) {
    return this.campus.delete({where: {id}})
  }
}
