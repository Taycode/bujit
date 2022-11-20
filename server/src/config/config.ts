export const config = {
  PORT: process.env.PORT || 4141,
  MONGO_URI: 'mongodb://bujit-db:27017/bujit',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  REDIS_URL: process.env.REDIS_URL || 'redis:redis_db:6379'
};
