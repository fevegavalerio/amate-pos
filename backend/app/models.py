import uuid

from sqlmodel import Field, Relationship, SQLModel

class Category(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str 
    description: str 