import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReviewService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createReviewDto: CreateReviewDto) {
    return this.review.create({
      data: createReviewDto
    })
  }

  findOne() {
    return this.review.findFirst();
  }

  remove(id: string) {
    return this.review.delete({where: {id}})
  }
}
