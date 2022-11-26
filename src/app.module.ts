import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { OrdersModule } from 'src/modules/orders.module';
import { UserModule } from 'src/modules/user.module';

@Module({
  imports: [],
  controllers: [AppController, OrdersModule, UserModule],
  providers: [AppService],
})
export class AppModule {}
