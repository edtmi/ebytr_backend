import { Router } from 'express';
import taskRoute from './taskRoutes';

const route = Router();

route.use('/task', taskRoute);

export default route;
