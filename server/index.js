import  Express  from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json({limit:"50mb"}))

app.use('/api/v1/dalle' , dalleRoutes)

app.get('/' , (req,res)=>{
    res.status(200).json({message:"hello world!"})
})

app.listen("7000" , (req,res)=>{
    console.log("Port Started")
})


