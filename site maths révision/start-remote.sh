#!/usr/bin/env sh
cd "$(dirname "$0")" || exit 1

printf "Choisis un identifiant : "
read -r REMOTE_USER
printf "Choisis un mot de passe : "
read -r REMOTE_PASS

if [ -z "$REMOTE_USER" ] || [ -z "$REMOTE_PASS" ]; then
  echo "Identifiant ou mot de passe manquant."
  exit 1
fi

echo
echo "Lancement du serveur local protege..."
REMOTE_USER="$REMOTE_USER" REMOTE_PASS="$REMOTE_PASS" node ./server.js &
SERVER_PID=$!

sleep 2

echo
echo "Le tunnel va afficher une URL publique."
echo "Garde ce terminal ouvert pendant l'utilisation a distance."
echo "Identifiant : $REMOTE_USER"
echo "Mot de passe : $REMOTE_PASS"
echo

trap 'kill "$SERVER_PID" 2>/dev/null' EXIT INT TERM
ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -R 80:localhost:4173 nokey@localhost.run
