import mongoose from 'mongoose';
import taskSchema from '../schemas/tasksSchemas';
import ITask from '../interfaces/taskInterface';

class TaskModel {
  constructor(private model = mongoose.model('tasks', taskSchema)) {}

  public createTask = async (task: ITask): Promise<ITask> => {
    const taskCreated = await this.model.create(task);

    return taskCreated;
  };
}

export default TaskModel;
