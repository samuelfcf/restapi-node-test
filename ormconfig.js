module.exports = {
  "type": "postgres",
   "url": process.env.DATABASE_URL, // acesso BD local, acesso a url no heroku quando remoto (aquela url doida do heroku)

   "entities": [
    process.env.PRODUCTION_ENTITY
   ],
   "migrations": [
    process.env.PRODUCTION_MIGRATION
   ],
   "cli": {
     "migrationsDir": "./src/database/migrations",
     "entitiesDir": "src/models"
   }
 }