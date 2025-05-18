import { PartialType } from '@nestjs/mapped-types';
import { CreateRideDto } from './create-ride.dto';
import { IsBoolean } from 'class-validator';

export class UpdateRideDto extends PartialType(CreateRideDto) {
    @IsBoolean()
    Active:Boolean
}
