import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TasksCreationAttribute {
  value: string;
}

@Table({ tableName: 'tasks' })
export class Tasks extends Model<Tasks, TasksCreationAttribute> {
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  completed: boolean;
}