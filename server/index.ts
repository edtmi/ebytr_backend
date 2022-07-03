import App from './api';

const app = new App().express;

app.listen(() => {
  console.log('App ouvindo na porta 3000');
});
