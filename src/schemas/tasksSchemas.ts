import { Schema } from 'mongoose';
import ITask from '../interfaces/taskInterface';

const taskSchema = new Schema<ITask>({
  descriptionTask: { type: String },
  dateCreated: { type: Date },
  statusTask: { type: String },
}, { versionKey: false });

export default taskSchema;
