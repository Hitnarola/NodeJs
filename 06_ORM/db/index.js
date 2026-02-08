const {drizzle}=require('drizzle-orm/node-postgres');

//postgres://<username>:<password>:@<host>:<port>/<database-name>
// const db=drizzle("postgres://admin:admin@localhost:5432/mydb");

//to read something from the env file
console.log(`database url is`,process.env.DATABASE_URL);
const db = drizzle(process.env.DATABASE_URL);

module.exports=db;