from sqlalchemy import Column, Integer, String, Text
from database.db import Base

class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcpName = Column(String)

    interactionType = Column(String)

    date = Column(String)

    time = Column(String)

    topics = Column(Text)

    materials = Column(Text)

    samples = Column(String)

    sentiment = Column(String)

    outcome = Column(Text)

    followUp = Column(Text)