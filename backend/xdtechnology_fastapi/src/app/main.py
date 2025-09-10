import uvicorn

from fastapi import FastAPI
from sqlalchemy import create_engine
from typeguard import typechecked

from app.api.routes import router as api_router
from app.env import env

DATABASE_URL = "postgresql://root:root@localhost:5432/fastapi_db"
engine = create_engine(DATABASE_URL, echo=True)
app = FastAPI(title="XDTechnology FastAPI")

# Register routes
app.include_router(api_router, prefix="/api")


@app.get("/")
@typechecked
def root():
    return {"message": "Welcome to XDTechnology FastAPI"}


if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host=env.HOST,
        port=env.PORT,
        reload=env.DEBUG,
    )
