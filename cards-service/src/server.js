require('dotenv').config();

const app = require('./app');
const sqliteClient = require('./config/database-config');
const { port } = require('./config/app-config');

sqliteClient;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});