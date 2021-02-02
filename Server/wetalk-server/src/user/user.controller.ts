import { Controller,Get, Post ,Req} from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {

    @Get()
    register(@Req() request: Request):string{
        return "Request:"+request.url;
    }
}
