import { connect } from 'mongoose';

const createConnection = (url: string) => {
  try {
    connect(url);
    console.log(`Connected to: ${url}`);
  } catch (error) {
    console.log(error);
  }
};

export default createConnection;
