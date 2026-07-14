from langchain_core.messages import HumanMessage

from agents.graph import graph

result = graph.invoke(
    {
        "messages": [
            HumanMessage(
                content="Today I met Dr Smith. We discussed Product X. Positive sentiment."
            )
        ]
    }
)

print(result)