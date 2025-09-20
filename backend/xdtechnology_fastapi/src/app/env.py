# env.py
from app.core.config import Env as _Evn

_env = _Evn()


def __getattr__(name: str):
    return getattr(_env, name)
