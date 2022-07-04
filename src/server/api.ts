import express from 'express';
import route from '../routes/index';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.router();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private router = () => {
    this.app.use(route);
  };
}

export default App;
