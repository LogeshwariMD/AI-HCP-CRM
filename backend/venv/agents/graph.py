from langgraph.prebuilt import create_react_agent

from services.llm import llm

from tools.log_interaction import log_interaction
from tools.edit_interaction import edit_interaction
from tools.summary_tool import summarize_interaction
from tools.followup_tool import suggest_followup
from tools.entity_tool import extract_entities

tools = [
    log_interaction,
    edit_interaction,
    summarize_interaction,
    suggest_followup,
    extract_entities,
]

graph = create_react_agent(
    model=llm,
    tools=tools,
)