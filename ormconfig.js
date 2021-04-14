module.exports = {
  "type": "postgres",
   "url": process.env.DATABASE_URL, // acesso BD local, acesso a url no heroku quando remoto (aquela url doida do heroku)
   "entities": [
     "src/models/**/*.ts" // quando mudamos p/ DIST perdemos o script dev:server
   ],
   "migrations": [
     "./src/database/migrations/**/*.ts"
   ],
   "cli": {
     "migrationsDir": "./src/database/migrations",
     "entitiesDir": "src/models"
   }
 }