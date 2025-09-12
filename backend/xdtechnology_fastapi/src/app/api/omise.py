from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.core.omise import omise

omise_router = APIRouter(prefix="/omise")


@omise_router.get("/")
def get_omise():
    return "omise"


class RequestBase(BaseModel):
    amount: int
    currency: str = Field(default="THB")
    description: str | None = None


class ChargeRequest(RequestBase):
    source: str


class SourcesRequest(RequestBase):
    type: str = Field(default="promptpay")


@omise_router.post("/sources")
async def post_sources(body: SourcesRequest):
    source = omise.Source.create(**body.dict(exclude_none=True))
    return source


@omise_router.post("/charges")
def post_charges(body: ChargeRequest):
    charge = omise.Charge.create(**body.dict(exclude_none=True))
    return charge
