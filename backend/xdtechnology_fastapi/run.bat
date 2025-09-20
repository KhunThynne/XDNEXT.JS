@echo off
REM cd ไป folder ที่ .bat อยู่
cd /d "%~dp0"

REM ตั้ง PYTHONPATH เป็น path ของ .bat (ให้ Python หา src เจอ)
set PYTHONPATH=%CD%\src

REM activate venv (อยู่ใน folder เดียวกับ .bat)
call venv\Scripts\activate


black src/
isort src/


flake8 src/


mypy src/

REM run python
python src\app\main.py

pause
