const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://teezhiyao:197a6AOJqkIn7zeO@cluster0-shard-00-00-ljbra.mongodb.net:27017,cluster0-shard-00-01-ljbra.mongodb.net:27017,cluster0-shard-00-02-ljbra.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  port: process.env.PORT || 8000,
};

export default config;
