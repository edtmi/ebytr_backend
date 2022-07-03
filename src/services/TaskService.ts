import TaskModel from '../database/models/TaskModel';

class TaskService {
  public createTask = async (
    descriptionTask: string,
    statusTask: string,
  ): Promise<TaskModel> => {
    const taskCreated = await TaskModel.create({ descriptionTask, statusTask });

    return taskCreated;
  };
}

export default TaskService;
