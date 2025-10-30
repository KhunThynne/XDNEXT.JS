import asyncio

from contextlib import asynccontextmanager

import uvicorn

from env import _env
from fastapi import FastAPI
from services.discord_client import DISCORD_BOT_TOKEN, client
from sqlalchemy import create_engine
from typeguard import typechecked

from app.api import api_router

DATABASE_URL = "postgresql://root:root@localhost:5432/fastapi_db"
engine = create_engine(DATABASE_URL, echo=True)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # --- Code to run on startup ---
    print("FastAPI is starting up...")
    # สร้าง task ให้บอทรันใน background
    asyncio.create_task(client.start(DISCORD_BOT_TOKEN))
    await client.wait_until_ready()
    print(f"Bot '{client.user}' is ready!")

    yield  # <--- แอปพลิเคชันจะทำงาน ณ จุดนี้

    # --- Code to run on shutdown (ถ้ามี) ---
    print("FastAPI is shutting down, closing bot connection...")
    await client.close()


app = FastAPI(title="XDTechnology FastAPI")

app.include_router(api_router)


@app.get("/")
@typechecked
def root():
    return {"message": "Welcome to XDTechnology FastAPI"}


if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host=_env.HOST,
        port=_env.PORT,
        reload=_env.DEBUG,
    )
