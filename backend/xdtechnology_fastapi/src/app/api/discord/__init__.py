# bot_server.py
from fastapi import APIRouter

from app.services.discord_client import DISCORD_GUILD_ID, client

discord_router = APIRouter(prefix="/discord")


@discord_router.get("/")
async def __init__():
    print("HI")
    guild = client.get_guild(DISCORD_GUILD_ID)
    return {"api": "discord api", "GUILD_ID": DISCORD_GUILD_ID,"TEST":guild}


@discord_router.get("/member")
async def get_members():
    """
    Endpoint สำหรับดึงรายชื่อสมาชิกทั้งหมดในเซิร์ฟเวอร์
    """
    try:
        guild = client.get_guild(DISCORD_GUILD_ID)

        if not guild:
            return {"error": "Guild not found"}, 404

        # ดึงข้อมูลสมาชิกและจัดรูปแบบ
        member_list = [
            {
                "id": str(member.id),
                "username": member.name,
                "displayName": member.display_name,
                "avatar": member.display_avatar.url,
            }
            for member in guild.members
        ]

        return member_list
    except Exception as e:
        return {"error": str(e)}, 500
