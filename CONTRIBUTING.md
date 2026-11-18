# Travailler à plusieurs sur MEDI-EXPRESS

## Récupérer le projet

```bash
git clone https://github.com/ONA19/MEDI-EXPRESS.git
cd MEDI-EXPRESS
```

## Avant chaque séance de travail

Récupérez les changements des autres :

```bash
git pull
```

## Proposer un changement

1. Créez une branche pour votre travail :
   ```bash
   git checkout -b ma-modification
   ```
2. Faites vos changements, puis enregistrez-les :
   ```bash
   git add .
   git commit -m "Décris ici ce que tu as changé"
   ```
3. Envoyez la branche sur GitHub :
   ```bash
   git push -u origin ma-modification
   ```
4. Sur GitHub, ouvrez une **Pull request** vers `main`. Un autre membre de l'équipe relit avant de fusionner.

## Règles simples

- On ne travaille jamais directement sur `main`.
- Un commit = un changement clair, avec un message en français qui dit ce qui change.
- On n'envoie jamais de mots de passe, de clés d'API ni de fichier `.env` sur GitHub.
- Si deux personnes ont modifié le même fichier, Git signale un conflit : on le règle ensemble avant de fusionner.
