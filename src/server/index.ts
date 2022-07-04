import App from './api';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

const app = new App().app;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
