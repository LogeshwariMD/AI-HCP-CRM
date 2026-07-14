import json

from database.db import SessionLocal
from database.models import Interaction


def save_interaction(data):

    db = SessionLocal()

    interaction = Interaction(

        hcpName=data.get("hcpName"),

        interactionType=data.get("interactionType"),

        date=data.get("date"),

        time=data.get("time"),

        topics=json.dumps(data.get("topics")),

        materials=json.dumps(data.get("materials")),

        samples=data.get("samples"),

        sentiment=data.get("sentiment"),

        outcome=data.get("outcome"),

        followUp=data.get("followUp")

    )

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    db.close()

    return interaction