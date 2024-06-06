require('dotenv').config();
const connctionDB = require('./db/db_connection.js');
// import { app } from './app.js';
const {app}=require('./app.js');



const port =  3000;
connctionDB().then(()=>{
 app.listen(3000,()=>{
    console.log('Server running')
})
console.log(
    'db connected'
)
}).catch(
    (err)=>{
   console.log('mongodb err connection faild ',err)
    }
); // This should correctly call the function

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


/*
const app=express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
        app.on('error',(error)=>{
console.log("DB Error",error);
        })
        app.listen(3000,()=>{
            console.log('server on');
        })
    } catch (error) {
        console.log("Err ",error);
    }
})();*/