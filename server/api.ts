import express from 'express';
import createConnection from '../src/models/connection';
import route from '../src/routes/index';

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
    this.express.use(route);
  };
}

export default App;
