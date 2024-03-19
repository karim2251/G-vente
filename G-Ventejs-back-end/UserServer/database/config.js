const mongoose = require("mongoose");

// connected to mongodb database
const connection = async ()=>{

    try{
       await mongoose.connect(process.env.MONGODB_URL)
            .then((result)=>{
                console.log("mongodb connected");
            })
            .catch((err)=>{
                console.log("mongodb errors : " + err);
            })
            
    }catch{
        console.log("you have problem in mongodb connection");

    }

}

// run the function
connection();


 