from fastapi import FastAPI
from app.api.routes import router as api_router

app = FastAPI(title="XDTechnology FastAPI")

# Register routes
app.include_router(api_router, prefix="/api")


@app.get("/")
def root():
    return {"message": "Welcome to XDTechnology FastAPI"}
