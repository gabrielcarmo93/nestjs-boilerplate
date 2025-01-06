import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './infra/auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @IsPublic()
  @Render('forms')
  getHello() {
    return { message: 'Hello World!' };
  }

  @IsPublic()
  @Post('enviar-email')
  enviarEmail(@Body() dto: { email: string; message: string }) {
    const { email, message } = dto;

    return this.appService.sendMail(email, message);
  }
}
