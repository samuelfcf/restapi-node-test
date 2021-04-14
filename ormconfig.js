module.exports = {
  "type": "postgres",
   "url": process.env.DATABASE_URL, // acesso BD local, acesso a url no heroku quando remoto (aquela url doida do heroku)
   "entities": [
     "dist/models/**/*.js" // quando mudamos p/ DIST perdemos o script dev:server
   ],
   "migrations": [
     "dist/database/migrations/**/*.js"
   ],
   "cli": {
     "migrationsDir": "./src/database/migrations",
     "entitiesDir": "src/models"
   }
 }