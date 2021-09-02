import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dbUser:871jeff871@cluster0.rzj0d.mongodb.net/test'
    ),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
