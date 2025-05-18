import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RideService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }

  create(createRideDto: CreateRideDto) {
    return this.ride.create({
      data: createRideDto
    })
  }

  findAll() {
    return this.ride.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  update(id: string, updateRideDto: UpdateRideDto) {
    return this.ride.update({
      where: {id},
      data: updateRideDto
    })
  }

  remove(id: string) {
    return this.ride.delete({where: {id}})
  }
}
