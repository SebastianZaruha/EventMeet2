import { Sequelize } from "sequelize";

const connectDB = new Sequelize(
  "postgres://postgres:jtRaVYfVpehvSZEpxnUdFdKjviXMbakZ@autorack.proxy.rlwy.net:14793/railway"
);

export default connectDB;