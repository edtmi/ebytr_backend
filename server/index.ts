import App from './api';

const app = new App().express;

app.listen(3001, () => {
  console.log('App ouvindo na porta 3001');
});
