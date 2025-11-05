import express from "express";
import "dotenv/config";
import userRoute from "./routes/user-rouet.js";

const app = express();
const PORT = process.env.PORT || 88;

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr em http://localhost:${PORT}`);
});
