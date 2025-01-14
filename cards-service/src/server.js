require('dotenv').config();

const app = require('./app');
const sqliteClient = require('./config/database-config');
const env = require('./config/app-config');

const port = env.port;

sqliteClient;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});