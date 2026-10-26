@echo off
title Update Alifio ke Vercel
color 0b
echo ===================================================
echo     Mengirim Pembaruan Alifio ke Vercel...
echo ===================================================
echo.

git add .
git commit -m "update web alifio" >nul 2>&1

echo Mengirim perubahan ke GitHub...
echo (Jika muncul jendela browser, silakan klik 'Sign in with your browser')
echo.

git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo  BERHASIL! Pembaruan sedang diproses Vercel.
    echo  Website https://alifio-nkso.vercel.app/
    echo  akan otomatis terupdate dalam hitungan detik.
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo  Perhatian: Perlu autentikasi akun GitHub Anda.
    echo  Silakan login saat jendela browser terbuka.
    echo ===================================================
)

echo.
pause
