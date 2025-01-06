import { MailerModule as NodeMailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NodeMailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        ignoreTLS: true,
      },
      defaults: {
        from: "'No Reply' <",
      },
    }),
  ],
})
export class MailerModule {}
