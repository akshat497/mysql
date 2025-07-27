import { Sequelize } from "sequelize";

const sequelize = new Sequelize('manikriti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();
export default sequelize;
