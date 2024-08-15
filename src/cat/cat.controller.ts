import { Controller, Get, Post, Req,HttpCode,Param, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {


    @Post()
    create(@Body() createCatDto: CreateCatDto) {
      return '🟢 This action adds a new cat';
    }
}
