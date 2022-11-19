export const config = {
  PORT: process.env.PORT || 4141,
  MONGO_URI: 'mongodb://bujit-db:27017/bujit',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  SEERBIT: {
      SECRET: process.env.SEERBIT_SECRET as string,
      PUBLIC: process.env.SEERBIT_PUBLIC as string,
      BASE_URL: process.env.SEERBIT_BASE_URL as string,
  }
};
