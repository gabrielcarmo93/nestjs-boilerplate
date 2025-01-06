import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendMail(email: string, mensagem: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Enviando Email com NestJS',
      html: `<h3 style="color: red">${mensagem}</h3>`,
    });
  }
}
