import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsBoolean } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
    @IsBoolean()
    Active:Boolean;
}
