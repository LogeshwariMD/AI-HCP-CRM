import json
from langchain_core.tools import tool
from services.llm import llm


@tool
def edit_interaction(current_data: dict, user_message: str):
    """
    Modify an existing interaction.
    """

    prompt = f"""
Current Interaction

{current_data}

User correction

{user_message}

Update ONLY changed fields.

Return JSON only.
"""

    response = llm.invoke(prompt)

    try:
        return json.loads(response.content)
    except Exception:
        return {
            "error": response.content
        }