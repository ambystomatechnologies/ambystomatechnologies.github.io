@echo off
chcp 65001 > nul
title Portal Oficial - Ambystoma Technologies

echo =================================================================
echo   [OK] Portal Oficial de Ambystoma Technologies (GitHub Pages)
echo =================================================================
echo   URL Web en Vivo: https://ambystomatechnologies.github.io/
echo   Servidor Local:  http://localhost:8081
echo =================================================================
echo.

start http://localhost:8081
python -m http.server 8081
pause
