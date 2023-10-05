
import express  from "express";
import * as dotenv from 'dotenv';
import deepai from 'deepai'



dotenv.config();

const router = express.Router();

deepai.setApiKey('d50ee430-736a-4d60-9ff8-6b064e160375');




router.route('/').get(async (req,res)=>{

    res.status(200).json({message:"hello world! from routes"})
})

router.route('/').post(async (req,res)=>{
    try {

        // const {prompt} = req.body;

        // const response = await openai.createImage({
        //     prompt:"A white cat",
        //     n:1,
        //     size: '1024x1024',
        //     response_format: 'b64_json'
        // })

        // const image = response.data.data[0].b64_json;

        // (async function() {
        //     var resp = await deepai.callStandardApi("text2img", {
        //             text: "A white cat",
        //             grid_size : "1",
        //     });
        //     console.log(resp.output_url);
        // })()


        // res.status(200).json({photo : image})

        const response = await fetch('https://source.unsplash.com/random/90×70/?white-cat'
      )
      console.log(response.content-type)
        
    } catch (error) {
        console.log("new error",error.message)
        res.status(500).json({message:"Something went wrong"})
    }
})

export default router;


