import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ragRoutes from "./routes/ragRoutes.js";
import { loadDocuments } from "./rag/loadDocuments.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ragRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("RAG server started!");
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  await loadDocuments();
});