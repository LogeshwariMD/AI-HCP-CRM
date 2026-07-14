import json
from langchain_core.tools import tool
from services.llm import llm


@tool
def extract_entities(user_message: str):
    """
    Extract CRM entities.
    """

    prompt = f"""
Extract the following:

Doctor Name

Hospital

Product

Competitor

Materials

Objections

Sentiment

Return JSON only.

{user_message}
"""

    response = llm.invoke(prompt)

    try:
        return json.loads(response.content)
    except Exception:
        return {
            "error": response.content
        }