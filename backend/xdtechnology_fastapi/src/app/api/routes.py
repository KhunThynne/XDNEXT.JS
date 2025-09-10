from fastapi import APIRouter

router = APIRouter()
from typing import TypedDict


class MyData(TypedDict):
    name: str
    age: int


# ตัวอย่าง endpoint
@router.get("/settings")
def get_products():
    sample_products = [
        {"id": 1, "name": "Product Aปป"},
        {"id": 2, "name": "Product B"},
    ]
    test({"age": 0, "name": ""}, "test")
    return sample_products


def test(data: MyData, test: str):
    name = data.get("name")
    print(data)
