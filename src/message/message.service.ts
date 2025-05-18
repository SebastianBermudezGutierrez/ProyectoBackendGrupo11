import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MessageService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createMessageDto: CreateMessageDto) {
    return this.message.create({
      data: createMessageDto
    })
  }

  findOne() {
    return this.message.findFirst();
  }

  remove(id: string) {
    return this.message.delete({where: {id}})
  }
}
