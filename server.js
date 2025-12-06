import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const RETELL_API_KEY = process.env.RETELL_API_KEY;

if (!RETELL_API_KEY) {
  console.error("ERROR: RETELL_API_KEY not found in environment variables");
  console.error("Please create a .env file with RETELL_API_KEY=your_key_here");
  process.exit(1);
}

app.post("/api/start-web-call", async (req, res) => {
  try {
    const { agentId } = req.body;
    if (!agentId) {
      return res.status(400).json({ error: "agentId is required" });
    }

    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Retell API error:", data);
      return res.status(response.status).json({ error: data.message || "Failed to create web call" });
    }

    return res.json({
      accessToken: data.access_token,
      callId: data.call_id,
      agentId: data.agent_id,
    });
  } catch (err) {
    console.error("Error creating web call:", err.message);
    return res.status(500).json({ error: "Failed to create web call" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
