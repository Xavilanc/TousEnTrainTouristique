# Pour rajouter une route

1. Copier les fichiers suivants:
   /src/models/TrainManager.js
   /src/controllers/trainControllers.js
2. Renommer TrainManager.js par VOTRE_TABLEManager.js et trainControllers.js par VOTRE_TABLEControllers.js

3. Dans le fichier VOTRE_TABLEManager.js modifier la ligne 10 train par votre table.

4. Suivre les consignes en commentaire pour adapter a votre table

5. Sur le fichier VOTRE_TABLEController.js changer toute reference à train par VOTRE_TABLE

6. Dans le fichier /src/router.js

7. Faire l'import du controller comme la ligne 5

8. Copier les lignes de 7 à 11 pour faire les nouvelles routes.

# MVC Express

## Description

This repository is a simple Express MVC structure from scratch.

## Steps

1. Clone the repo from Github.
2. Run `npm install` or `yarn install`.
3. Create _.env_ from _.env.sample_ file and add your DB parameters. Don't delete the _.sample_ file, it must be kept.

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

4. Adapt _database.sql_ with your own tables. Import the script in your SQL server. You can do it manually or run _migrate_ script (either using `npm run migrate` or `yarn run migrate`).
5. Start the server in dev mode with `npm run dev` or `yarn run dev`. This will run `index.js` using _nodemon_.
6. Go to `localhost:5000` with your favorite browser.
7. From this starter kit, create your own web application.

### Windows Users

If you develop on Windows, you should edit you git configuration to change your end of line rules with this command :

`git config --global core.autocrlf true`

## Example

An example (a basic list of items) is provided (you can load the _database.sql_ file in a test database). The accessible URLs are :

- Home page: [GET localhost:5000/](localhost:5000/)
- Item browse: [GET localhost:5000/items](localhost:5000/items)
- Item read: [GET localhost:5000/items/:id](localhost:5000/items/2)
- Item edit: PUT localhost:5000/items/:id
- Item add: POST localhost:5000/items
- Item deletion: DELETE localhost:5000/items/:id

You can find all these routes declared in the file `src/router.js`. You can add your own new routes, controllers and models.
