import uvicorn

from env import _env
from fastapi import FastAPI
from sqlalchemy import create_engine
from typeguard import typechecked

from app.api import api_router

DATABASE_URL = "postgresql://root:root@localhost:5432/fastapi_db"
engine = create_engine(DATABASE_URL, echo=True)
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
