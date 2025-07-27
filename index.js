import express from "express" 
import sequelize from "./configs/connection.js"
import router from "./routes/userRoutes.js";

const app =express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/api",router)
sequelize.sync({ force: false })  // `force: false` will not drop tables; set to true if you want to reset tables
  .then(() => {
    console.log('Database has been synchronized.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});