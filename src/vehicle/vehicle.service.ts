import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VehicleService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicle.create({
      data: createVehicleDto
    })
  }

  findOne() {
    return this.vehicle.findFirst();
  }

  remove(id: string) {
    return this.vehicle.delete({where: {id}})
  }
}
