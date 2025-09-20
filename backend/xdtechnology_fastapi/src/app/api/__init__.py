# Register routes
from api.omise import omise_router
from fastapi import APIRouter

api_router = APIRouter(prefix="/api")
api_router.include_router(omise_router)
