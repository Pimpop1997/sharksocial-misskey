
#!/bin/bash

echo "🚀 เริ่มต้น Deploy SHARKSO🦈IAL..."

# ตรวจสอบ Git
if ! command -v git &> /dev/null
then
    echo "❌ ไม่พบ git กรุณาติดตั้งก่อนใช้งาน"
    exit
fi

# ตรวจสอบ Railway CLI
if ! command -v railway &> /dev/null
then
    echo "❌ ไม่พบ Railway CLI กำลังติดตั้ง..."
    npm install -g railway
fi

# แตกไฟล์ zip
unzip SHARKSO🦈IAL_Complete_Final.zip -d sharksoial-final
cd sharksoial-final

# ตั้งค่า Git repo
git init
git remote add origin https://github.com/YOUR_USERNAME/sharksocial-misskey.git
git checkout -b main
git add .
git commit -m "Initial commit with full SHARKSO🦈IAL system"
echo "⚠️ กรุณาแก้ลิงก์ GitHub ใน deploy.sh บรรทัด remote add origin ก่อนรันจริง!"

# เชื่อมกับ Railway
railway init --no-interactive
railway link
railway up

echo "✅ เสร็จสิ้นการ deploy ผ่าน Railway + GitHub"
