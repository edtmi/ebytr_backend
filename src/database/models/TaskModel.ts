import { DataTypes, DateDataType, Model } from 'sequelize';
import db from '.';

class TaskModel extends Model {
  public id?: number;
  public taskDescription!: string;
  public createdTask!: DateDataType;
  public status!: string;
}

TaskModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  descriptionTask: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdTask: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  statusTask: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}, {
  modelName: 'task',
  sequelize: db,
  timestamps: false,
  underscored: true,
});

export default TaskModel;
