import TaskModel from '../models/TaskModel';
import ITask from '../interfaces/taskInterface';

class TaskService {
  constructor(private model = new TaskModel()) {}

  public createTask = async (task: ITask): Promise<ITask> => {
    const taskCreated = await this.model.createTask(task);

    return taskCreated;
  };
}

export default TaskService;
