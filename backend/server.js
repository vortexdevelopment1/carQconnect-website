const app = require("./src/app");
const env = require("./src/config/env");

app.listen(env.port, () => {
  console.log(`Fioner backend listening on http://localhost:${env.port}`);
  console.log(`Allowed client origin(s): ${env.clientOrigins.join(", ")}`);
});
