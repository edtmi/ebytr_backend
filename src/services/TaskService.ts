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

  public updateTask = async (
    id: string,
    descriptionTask: string,
    statusTask: string,
  ): Promise<TaskModel> => {
    const taskExist = await TaskModel.findOne({ where: { id } });

    if (!taskExist) throw new Error('Task not found');

    return await taskExist.update({ descriptionTask, statusTask });
  };
}

export default TaskService;
