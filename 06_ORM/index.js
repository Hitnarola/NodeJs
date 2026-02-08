const dotenv=require('dotenv')
dotenv.config()

// at the start of the application we write the dotenv.config() to read the .env file and this will give us the access to the environment variable in our code
const db=require('./db');
const {usertable}=require('./drizzle/schima');
async function getalluser() {
    const data=await db.select().from(usertable);
    console.log(`user data is`,data);
    
    return data;
}

async function createuser({id,name,email}) {

    await db.insert(usertable).values({id,name,email});

}


// createuser({id:1,name:"john",email:"john@gmail.com"});
// createuser({id:2,name:"hit",email:"hit@gmail.com"});

getalluser();//this will give me or convert database into a object and this give by drizzle