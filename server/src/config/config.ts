export const config = {
  PORT: process.env.PORT || 4141,
  // MONGO_URI: 'mongodb://bujit-db:27017/bujit',
  MONGO_URI: 'mongodb://127.0.0.1:27017',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
};
