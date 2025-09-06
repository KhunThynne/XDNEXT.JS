from fastapi import APIRouter
from app.models.schemas import Product

router = APIRouter()

# ตัวอย่าง endpoint
@router.get("/products")
def get_products():
    sample_products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
    ]
    return sample_products
