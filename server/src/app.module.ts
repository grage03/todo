import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from "@nestjs/config";
import { sequelizeConfig } from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot(sequelizeConfig), TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
