from langchain_core.tools import tool
from services.llm import llm


@tool
def summarize_interaction(user_message: str):
    """
    Generate a concise CRM summary.
    """

    prompt = f"""
Summarize this HCP interaction professionally.

{user_message}
"""

    response = llm.invoke(prompt)

    return response.content