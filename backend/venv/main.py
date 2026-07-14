from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.llm import llm
from tools.log_interaction import log_interaction
from services.database_service import save_interaction

app = FastAPI(title="AI CRM HCP Module")

# ----------------------------------------------------
# CORS
# ----------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ----------------------------------------------------
# Request Model
# ----------------------------------------------------
class ChatRequest(BaseModel):
    message: str


# ----------------------------------------------------
# Home API
# ----------------------------------------------------
@app.get("/")
def home():
    return {
        "success": True,
        "message": "AI CRM Backend Running Successfully"
    }


# ----------------------------------------------------
# Test LLM
# ----------------------------------------------------
@app.post("/ask")
def ask_ai(request: ChatRequest):
    try:
        response = llm.invoke(request.message)

        return {
            "success": True,
            "response": response.content
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


# ----------------------------------------------------
# AI Log Interaction
# ----------------------------------------------------
@app.post("/chat")
def chat(request: ChatRequest):
    try:

        # Call LangChain Tool
        interaction = log_interaction.invoke(
            {
                "user_message": request.message
            }
        )

        # Save into database
        try:
            save_interaction(interaction)
        except Exception as db_error:
            print("Database Save Error:", db_error)

        return {
            "success": True,
            "data": interaction
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }