import path from 'path';

export default {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
