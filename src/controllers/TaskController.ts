import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

class TaskController {
  constructor(private service = new TaskService()) {}

  public createTask = async(req: Request, res: Response) => {
    const { descriptionTask, statusTask } = req.body;
    const taskCreated = await this.service.createTask(descriptionTask, statusTask);

    return res.status(201).json(taskCreated);
  };
}

export default TaskController;
