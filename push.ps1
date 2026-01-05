$msg = Read-Host "Commit message"

git pull origin main
git add .
git commit -m "$msg"
git push origin main

pause
