import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskRoute = Router();

const taskController = new TaskController();

taskRoute.route('/')
  .post(taskController.createTask);

export default taskRoute;
