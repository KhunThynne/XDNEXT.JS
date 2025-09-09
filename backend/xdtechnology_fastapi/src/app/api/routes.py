from fastapi import APIRouter
from src.app.models.schemas import UserSettings

router = APIRouter()

# ตัวอย่าง endpoint
@router.get("/settings")
def get_products():
    sample_products = [
        {"id": 1, "name": "Product Aปป"},
        {"id": 2, "name": "Product B"},
    ]
    return sample_products
