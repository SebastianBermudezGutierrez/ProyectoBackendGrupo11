import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookingService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createBookingDto: CreateBookingDto) {
    return this.booking.create({
      data: createBookingDto
    })
  }

  findAll() {
    return this.booking.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.booking.update({
      where: {id},
      data: updateBookingDto
    })
  }

  remove(id: string) {
    return this.booking.delete({where: {id}})
  }
}
