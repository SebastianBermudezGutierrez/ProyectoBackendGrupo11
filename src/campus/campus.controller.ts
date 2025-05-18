import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Post()
  create(@Body() createCampusDto: CreateCampusDto) {
    return this.campusService.create(createCampusDto);
  }

  @Get('')
  findOne() {
    return this.campusService.findOne();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campusService.remove(id);
  }
}
