const {defineConfig}=require("drizzle-kit")

// for the hardcore for the database and username and password we maintain the .env file 
const dotenv=require('dotenv/config') // this is current version we directly import the config from the dotenv package and this will automatically read the .env file and give us the access to the environment variable in our code but other option is dotenv.config()


const confi=defineConfig({
    dialect:"postgresql",// which database are we used which is come in the dialect
    out:"./drizzle",// where we want to put our schema and migration file
    schema:"./drizzle/schima.js",// where is our schema file
    dbCredentials:{
        // url:"postgres://admin:admin@localhost:5432/mydb" // how we connect with database
        url:process.env.DATABASE_URL
    },
});
//drizzle kit is different from the drizzle orm 
//drizzle orm is used to send and receive data from the database and it is used in our code to connect with database and perform crud operation
// kit is used to send your schema and UI for the database

module.exports=confi;
// npx drizzle-kit push --> this will tell orm to push the schema to the database and it will create the table in the database according to our schema file and it will also create the migration file in the drizzle folder and give the UI to the database and we can see the table in the database and we can also see the migration file in the drizzle folder

