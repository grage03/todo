import { config } from 'dotenv';
import { Tasks } from "../tasks/tasks.model";

config();
export interface ISequelizeConfig {
  dialect: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  models?: any,
  autoLoadModels: boolean,
}

export const sequelizeConfig: ISequelizeConfig = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  models: [Tasks],
  autoLoadModels: true,
};