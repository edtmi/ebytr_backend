import express from 'express';

class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.express.use(express.json());
  }
}

export default App;
