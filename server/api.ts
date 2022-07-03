import express from 'express';
import createConnection from '../src/models/connection';

class App {
  public express: express.Express;
  public connection: void;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.connection = createConnection("mongodb://localhost:27017/ebytr");
  }
}

export default App;
