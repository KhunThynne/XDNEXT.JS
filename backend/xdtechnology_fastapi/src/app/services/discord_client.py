# app/services/discord_client.py
import discord

from env import _env

# สร้าง Client และ Export ไปให้ไฟล์อื่นใช้
intents = discord.Intents.default()
intents.members = True
client = discord.Client(intents=intents)

# Export ค่า GUILD_ID ไปด้วย
DISCORD_GUILD_ID = int(_env.DISCORD_GUILD_ID)
DISCORD_BOT_TOKEN = _env.DISCORD_BOT_TOKEN
