import {app} from './../src/app.js'
import dotenv from 'dotenv'
// import connectDB  from './db/index.js'
import {DB_NAME} from './constants.js'
import mongoose from 'mongoose';
dotenv.config(
    {
        path:'./env'
    }
);



// connectDB().then(()=>{
//     app.listen(process.env.PORT || 8080 ,()=>{
//         console.log(`server is running on port :${process.env.PORT}`);
//     })
// }).catch(
//     (err)=>{
//         console.log("mongo db connection failed",err);

   
//     })







// Database connection with iffe function 
    
      (async () => {
            try {
                const connect = await mongoose.connect(`${process.env.MONGODB_URI}/chai-youtube`)
                if (connect) {
                    console.log('mongo db connect ')
                }
            } catch(error) {

                console.log("ERROR:", error);
              
            }
        })()


    const mongo = async()=>{

        const connect = await mongoose.connect('mongodb+srv://gayatrisathawane:gayatri123@cluster0.cqdx7ze.mongodb.net/chai-videotube') 
           if(connect){
            console.log("connected")
           }
    }
    mongo()

    