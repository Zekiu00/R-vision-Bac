@echo off
setlocal
cd /d "%~dp0"

echo Revision Bac - Acces distant securise
set /p REMOTE_USER=Choisis un identifiant : 
set /p REMOTE_PASS=Choisis un mot de passe : 

if "%REMOTE_USER%"=="" (
  echo Identifiant manquant.
  exit /b 1
)

if "%REMOTE_PASS%"=="" (
  echo Mot de passe manquant.
  exit /b 1
)

echo.
echo Lancement du serveur local protege...
start "Revision Bac - Serveur securise" cmd /k "cd /d \"%~dp0\" && set REMOTE_USER=%REMOTE_USER% && set REMOTE_PASS=%REMOTE_PASS% && node server.js"

timeout /t 2 /nobreak >nul

echo.
echo Le tunnel va afficher une URL publique.
echo Garde cette fenetre ouverte pendant l'utilisation a distance.
echo Identifiant : %REMOTE_USER%
echo Mot de passe : %REMOTE_PASS%
echo.
ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -R 80:localhost:4173 nokey@localhost.run
