import { DataTypes } from "sequelize";
import sequelize from "../configs/connection.js"  // Import the Sequelize instance
import { v4 as  uuidv4 } from "uuid";
export const User = sequelize.define('User', {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // or use: defaultValue: () => uuidv4()
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


