# Gestionnaire de contact

Réalisation d'un gestionnaire de contact en full NodeJS.

## Liste des technologies utilisés

- NodeJS
- Express
- MongoDB ( Mongoose )
- Pug

## Comment l'utiliser ?

1. Il faut tout d'abord cloner le repository
2. Il faut se déplacer dans le répertoire fraîchement cloner
3. Il faut installer les dépendances nécessaire
   1. /!\ NE SURTOUT PAS FAIRE : `npm update` la raison étant qu'une dépendance utilise une version antérieur et si elle se met à jour alors le code sera tout simplement cassé. Il est utilisé avec **commonJS (les requires)** et dans la dernière version, ils ont migré vers les **modules (les imports)**
4. Important il faut installer nodemon en global afin de pouvoir exécuter le script start
5. Renommer le **.env.sample** en **.env**
6. Éditer le **.env** avec vos paramètres personnel
7. Enfin lancer le serveur.

```sh
# 1 - cloner le repository
git clone https://github.com/alain-guillon-it/gestionnaire_contact.git

# 2 - Se déplacer dans le projet
cd gestionnaire_contact

# 3 - Installation des dépendances
npm i # Raccourcis de : npm install

# 4 - Installer nodemon en global sur son système
npm install -g nodemon # il est possible sur mac ou linux de devoir préfixer la commande avec : sudo
```

Il faut manuellement renommer le fichier **.env.sample** en **.env**.
Nous pouvons le faire en ligne de commande comme suit :

```sh
# 5 - Renommer le .env.sample en .env
mv .env.sample .env
```

Configurer à présent le fichier .env (**A savoir que ce fichier est écrit en PERL**)

```perl
# 6 - Configuration du .env

# Configuration Serveur (type: NUMBER && STRING)
PORT=3000
HOSTNAME=localhost

# Configuration MongoDB (type: STRING)
MONGODB_PSEUDO=ton_pseudo
MONGODB_PASSWORD=ton_mot_de_passe
MONGODB_CLIENT_NAME=le_nom_du_client_utilisé_sur_mongodb
MONGODB_DATABASE_NAME=le_nom_de_ta_DB_utilisé_sur_mongodb
MONGODB_COLLECTION_NAME=le_nom_de_la_collection_utilisé_sur_mongodb

# configuration HASHAGE (type: NUMBER)
BCRYPT_SALT=12

# Configuration JWT (type: STRING)
JWT_SECRET=un_truc_ultra_confidentiel_que_tu_ne_dois_divulguer_à_personne
```

Enfin on arrive à la fin

```sh
# 5 - Démarrage du server
npm start
```
