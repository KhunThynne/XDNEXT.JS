from fastapi import FastAPI
import uvicorn
from src.app.api.routes import router as api_router
from src.app.core.config import settings
from sqlmodel import SQLModel, create_engine
DATABASE_URL = "postgresql://root:root@localhost:5432/fastapi_db"
engine = create_engine(DATABASE_URL, echo=True)
app = FastAPI(title="XDTechnology FastAPI")

# Register routes
app.include_router(api_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to XDTechnology FastAPI"}

if __name__ == "__main__":
    uvicorn.run("src.app.main:app",
                host=settings.HOST,
                port=settings.PORT,
                reload=settings.DEBUG)