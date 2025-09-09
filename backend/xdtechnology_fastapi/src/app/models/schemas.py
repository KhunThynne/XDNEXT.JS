from sqlmodel import SQLModel, Field

class UserSettings(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    user_id: str
    preferences: str  

class PurchasedItem(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    user_id: str
    item_json: str
