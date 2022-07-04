import TaskModel from '../database/models/TaskModel';

class TaskService {
  public createTask = async (
    descriptionTask: string,
    statusTask: string,
  ): Promise<TaskModel> => {
    const taskCreated = await TaskModel.create({ descriptionTask, statusTask });

    return taskCreated;
  };

  public listAllTasks = async (): Promise<TaskModel[]> => {
    const getAllTasks = await TaskModel.findAll();

    return getAllTasks;
  };
}

export default TaskService;
