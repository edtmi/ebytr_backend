import { Schema } from 'mongoose';
import ITask from '../interfaces/taskInterface';

const taskSchema = new Schema<ITask>({
  task: { type: String },
  date: { type: Date },
  status: { type: String },
}, { versionKey: false });

export default taskSchema;
