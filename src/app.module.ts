import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './infra/auth/auth.module';
import { JwtAuthGuard } from './infra/auth/guards/jwt-auth.guard';
import { MailerModule } from './infra/mailer/mailer.module';
import { PrismaModule } from './infra/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, MailerModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
