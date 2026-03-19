# Publier le site partout en France avec GitHub Pages

Cette methode est gratuite et ne demande pas Git sur ton PC.

## Ce qu'il te faut

- Un compte GitHub
- Ce dossier complet

## Methode la plus simple

1. Va sur [https://github.com/new](https://github.com/new)
2. Cree un depot public, par exemple `revision-bac`
3. N'ajoute ni README, ni licence, ni `.gitignore`
4. Ouvre le depot vide
5. Clique sur `uploading an existing file`
6. Glisse-depose tous les fichiers de ce dossier dans la page GitHub
7. Valide avec `Commit changes`

## Activer GitHub Pages

1. Dans le depot, va dans `Settings`
2. Va dans `Pages`
3. Dans `Build and deployment`
4. Choisis `Deploy from a branch`
5. Branche : `main`
6. Dossier : `/ (root)`
7. Clique sur `Save`

## Adresse du site

GitHub te donnera une adresse du type :

`https://tonpseudo.github.io/revision-bac/`

Le site sera alors accessible partout en France sur :

- telephone
- ordinateur portable
- Windows
- iPhone
- Android

## Fichiers importants deja prets

- `index.html`
- `histoire.html`
- `geographie.html`
- `ses.html`
- `quiz-center.html`
- `manifest.webmanifest`
- `service-worker.js`
- `.nojekyll`

## Si tu veux une appli installable

Une fois le site en ligne :

- sur Android : ouvre le site dans Chrome puis `Ajouter a l'ecran d'accueil`
- sur iPhone : ouvre le site dans Safari puis `Partager` > `Sur l'ecran d'accueil`
- sur Windows Edge : ouvre le site puis `...` > `Applications` > `Installer ce site en tant qu'application`

## Important

Si tu modifies le site plus tard :

1. retourne dans ton depot GitHub
2. remplace les fichiers modifies
3. valide le changement
4. attends 1 a 2 minutes

GitHub Pages republiera automatiquement le site.
