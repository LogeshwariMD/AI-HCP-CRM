import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateInteraction } from "../redux/interactionSlice";

function AIChat() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hello! Describe today's interaction with the Healthcare Professional.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userInput,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        message: userInput,
      });

      if (res.data.success) {
        if (res.data.data) {
          dispatch(updateInteraction(res.data.data));
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "✅ Interaction logged successfully.\n\nThe Interaction Details panel has been updated.",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              res.data.error || "❌ Unable to process the interaction.",
          },
        ]);
      }
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Cannot connect to the FastAPI backend.\n\nMake sure the backend is running.",
        },
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "👋 Hello! Describe today's interaction with the Healthcare Professional.",
      },
    ]);
  };

  return (
    <Card
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 140px)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        <Typography variant="h5" gutterBottom>
          🤖 AI Assistant
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Log HCP interactions using natural language.
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Chat Window */}
         <Paper
           elevation={0}
           sx={{
           height: "300px",
           overflowY: "auto",
           border: "1px solid #ddd",
           borderRadius: 2,
           p: 2,
           background: "#fafafa",
           mb: 2,
         }}
        >
        
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                textAlign: msg.role === "user" ? "right" : "left",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color:
                    msg.role === "user"
                      ? "#1976d2"
                      : "#2e7d32",
                  fontWeight: "bold",
                }}
              >
                {msg.role === "user" ? "You" : "AI"}
              </Typography>

              <Typography
                sx={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </Typography>
            </Box>
          ))}

          {loading && (
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <CircularProgress size={30} />
            </Box>
          )}
        </Paper>

        {/* Bottom Input */}
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Describe Interaction..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={clearChat}
            >
              Clear Chat
            </Button>

            <Button
              variant="contained"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "Processing..." : "AI Log"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AIChat;