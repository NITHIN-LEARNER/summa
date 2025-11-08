import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Example test route
app.get("/", (req, res) => {
  res.send("✅ Nithin backend is working!");
});

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 New message from:", name, email, message);
  res.json({ success: true, message: "Message received successfully!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
