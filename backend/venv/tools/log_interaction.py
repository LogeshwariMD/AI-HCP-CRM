import json
from langchain_core.tools import tool
from services.llm import llm


@tool
def log_interaction(user_message: str):
    """
    Extract CRM interaction details from a conversation.
    """

    prompt = f"""
You are an AI-powered CRM assistant for pharmaceutical sales representatives.

Extract the following information from the user's message.

Return ONLY a valid JSON object.

Do NOT use markdown.
Do NOT explain anything.

If any field is missing, use an empty string "" instead of "not specified".

Use these fields exactly:

{{
    "hcpName":"",
    "interactionType":"",
    "date":"",
    "time":"",
    "topics":[],
    "materials":[],
    "samples":"",
    "sentiment":"",
    "outcome":"",
    "followUp":""
}}

Rules:

- interactionType must be one of:
  Visit
  Call
  Virtual Meeting
  Email

- sentiment must be one of:
  Positive
  Neutral
  Negative

- topics must always be an array.

- materials must always be an array.

Today's user message:

{user_message}

"""

    response = llm.invoke(prompt)

    content = response.content.strip()

# Remove markdown code fences if present
    if content.startswith("```json"):
      content = content.replace("```json", "", 1)

    if content.startswith("```"):
      content = content.replace("```", "", 1)

    if content.endswith("```"):
      content = content[:-3]

    content = content.strip()

    try:
      return json.loads(content)

    except Exception as e:
      return {
        "error": str(e),
        "raw": content
    }