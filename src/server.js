const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const { sequelize } = require('./models');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      dialectOptions: {
        ssl: {
          rejectUnauthorized: true,
        }
      }
    }
  );

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


sequelize.authenticate()
  .then(() => console.log('Connection to RDS MySQL successful'))
  .catch(err => console.error('Unable to connect to RDS MySQL:', err));
