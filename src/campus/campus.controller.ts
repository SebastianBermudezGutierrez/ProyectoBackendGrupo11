import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createCampusDto: CreateCampusDto, @UploadedFile('image') image: Express.Multer.File,) {
    return this.campusService.create(createCampusDto, image);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campusService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campusService.remove(id);
  }
}