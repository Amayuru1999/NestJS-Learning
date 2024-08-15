import { Controller, Get, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {
    @Get()
    findAll(@Req() request:Request): string {
        console.log('🟢 Headers: ',request.headers);
        return 'This action returns all cats';
    }
}
