//config yhn par configuration h
//db ek third party h, and baaki saare kaam ek saath hota reh => req get from client to server +connect db => dono kaam ke liye use asynch js
//arrow fn strategy for asynch js
const mongoose = require("mongoose");

const connectDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // res.status(200).send({
        //     message: 'Database connected',
        // });
        console.log(`Database is connected`.bgYellow.blue);
    }
        catch(error){
            // res.status(500).send({
            //     message: `Internal Server Error ${error}`,
            //     success: false,
            //     description: `Database not connected`,
            // });
            console.log(`Error occured ${error}`.bgRed.white);
        }
   

}
module.exports = connectDB;
