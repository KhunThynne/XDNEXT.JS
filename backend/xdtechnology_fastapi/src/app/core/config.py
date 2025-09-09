from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    APP_NAME: str = "XDTechnology API"
    DEBUG: bool = True
    HOST: str = "127.0.0.1"
    PORT: int = 8000
    DATABASE_URL: str = Field(default=None)

    class Config:
        env_file = ".env"


settings = Settings()
