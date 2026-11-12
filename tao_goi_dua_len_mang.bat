@echo off
title Dong goi ban web nhe de dua len mang
cd /d "%~dp0"
if exist "web_xuat_ban" rmdir /s /q "web_xuat_ban"
mkdir "web_xuat_ban"
copy /y "index.html" "web_xuat_ban\index.html" >nul
if exist "logo.jpg" copy /y "logo.jpg" "web_xuat_ban\logo.jpg" >nul
if exist ".nojekyll" copy /y ".nojekyll" "web_xuat_ban\.nojekyll" >nul
xcopy /e /i /q /y "data" "web_xuat_ban\data" >nul
xcopy /e /i /q /y "games" "web_xuat_ban\games" >nul
echo Da tao xong thu muc gon nhe: web_xuat_ban (chi gom trang web va 10 tro choi).
echo Hay keo thu muc "web_xuat_ban" nay tha vao trang app.netlify.com/drop nhe!
explorer "web_xuat_ban"
pause

