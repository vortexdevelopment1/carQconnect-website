const fs = require('fs');
let env = fs.readFileSync('.env', 'utf8');
env = env.replace(
  'MONGODB_URI=mongodb+srv://vortexcubesdevelopment_db_user:PkQkoSb6T0FT4odTz@cluster0.b2spmxl.mongodb.net/carqconnect?appName=Cluster0',
  'MONGODB_URI=mongodb://vortexcubesdevelopment_db_user:PkQkoSb6T0FT4odTz@ac-9zmrala-shard-00-00.b2spmxl.mongodb.net:27017,ac-9zmrala-shard-00-01.b2spmxl.mongodb.net:27017,ac-9zmrala-shard-00-02.b2spmxl.mongodb.net:27017/carqconnect?ssl=true&replicaSet=atlas-12tkmq-shard-0&authSource=admin&retryWrites=true&w=majority'
);
fs.writeFileSync('.env', env, 'utf8');
