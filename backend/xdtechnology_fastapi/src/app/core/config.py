from dotenv import load_dotenv
from pydantic import BaseSettings, Field

load_dotenv(".env")
load_dotenv(".env.local", override=True)


class Env(BaseSettings):
    APP_NAME: str = "XDTechnology API"
    DEBUG: bool = True
    HOST: str = "127.0.0.1"
    PORT: int = 8000
    DATABASE_URL: str = Field(default=None)
    OMISE_PUBLIC_KEY: str = Field(default=None)
    OMISE_SECRET_KEY: str = Field(default=None)

    class Config:
        pass
