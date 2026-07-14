from tools.log_interaction import log_interaction
from tools.edit_interaction import edit_interaction
from tools.summary_tool import summarize_interaction
from tools.followup_tool import suggest_followup
from tools.entity_tool import extract_entities


def execute_tool(message, current_data=None):
    """
    Simple routing based on user intent.
    """

    text = message.lower()

    if any(word in text for word in ["edit", "change", "update", "actually", "correct"]):
        return edit_interaction.invoke({
            "current_data": current_data or {},
            "user_message": message
        })

    elif any(word in text for word in ["summary", "summarize"]):
        return summarize_interaction.invoke(message)

    elif any(word in text for word in ["follow", "next", "next step"]):
        return suggest_followup.invoke(message)

    elif any(word in text for word in ["extract", "entities"]):
        return extract_entities.invoke(message)

    else:
        return log_interaction.invoke(message)