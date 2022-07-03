import express from 'express';
import createConnection from '../src/models/connection';
import taskRoutes from '../src/routes/taskRoutes';

class App {
  public express: express.Express;
  public connection: void;

  constructor() {
    this.express = express();
    this.middlewares();
    this.router();
    this.connection = createConnection("mongodb://localhost:27017/ebytr");
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private router = () => {
    this.express.use(taskRoutes);
  };
}

export default App;
