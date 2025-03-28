import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import recipeRoutes from "./src/routes/recipeRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/recipes", recipeRoutes);

app.get("/test", (req, res) => {
  res.send("Server is working!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
