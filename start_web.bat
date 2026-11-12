@echo off
title Kho Game Tuong Tac Giao Vien
cd /d "%~dp0"
echo Dang khoi dong Kho Game tai http://localhost:3000 ...
start "" http://localhost:3000
node server.js
pause

