import omise

from app.env import _env as env

omise.api_public = env.OMISE_PUBLIC_KEY
omise.api_secret = env.OMISE_SECRET_KEY
