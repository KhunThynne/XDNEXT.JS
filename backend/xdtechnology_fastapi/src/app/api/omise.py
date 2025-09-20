from collections.abc import Callable
from typing import TypeVar

from fastapi import APIRouter, HTTPException
from omise.errors import BaseError
from pydantic import BaseModel, Field

from app.core.omise import omise

omise_router = APIRouter(prefix="/omise")

T = TypeVar("T")


def omise_request(fn: Callable[..., T], *args, **kwargs) -> T:
    """
    Wrapper for calling Omise API.
    fn: The Omise function to call, e.g., omise.Source.create, omise.Charge.create
    *args, **kwargs: Arguments to pass to the function
    """
    try:
        result = fn(*args, **kwargs)
        return result
    except BaseError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


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
    source = omise_request(omise.Source.create, **body.dict(exclude_none=True))
    return source


@omise_router.post("/charges")
def post_charges(body: ChargeRequest):
    charge = omise_request(omise.Charge.create, **body.dict(exclude_none=True))
    return charge
