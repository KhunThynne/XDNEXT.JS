nginx -s reload
nginx.exe -s stop
nginx.exe -s quit
nginx.exe -t

Close all process those Nginx
taskkill /IM nginx.exe /F



1️⃣ Kill process ทั้งหมด
taskkill /IM nginx.exe /F


-IM nginx.exe → ระบุชื่อ process

/F → บังคับ kill

2️⃣ ถ้า Nginx run เป็น Windows service
sc stop nginx


จะหยุด service แบบ clean

ถ้าใช้ nssm run Nginx →

nssm stop nginx

3️⃣ ตรวจสอบว่า port 80 / 443 ถูกปล่อยแล้ว
netstat -ano | findstr :80
netstat -ano | findstr :443


ถ้าไม่มี LISTENING → Nginx ปิดเรียบร้อย

✅ สรุป

ใช้ cmd ได้เลย ไม่ต้องเปิด PowerShell

ใช้ taskkill สำหรับ process ทั่วไป

ใช้ sc stop สำหรับ service