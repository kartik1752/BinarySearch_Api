const express= require('express');
const cors = require('cors');

const app=express();

app.use(express.json());
app.use(cors()); 

app.post('/check/api/test' , (req,res) => {

    try{

        const{data,target}=req.body;
        if(!data || !target) return res.status(400).json({error:"data or target values not found.."});
        if(Array.isArray(data))
        {
            let left=0;
            let right=data.length;

            while(left<=right)
            {
                let mid=(left+right)/2;
                if(data[mid]==target) return res.status(200).json({success:`Target value is found at =${mid}`});
                if(data[mid]<target) left=mid+1;
                if(data[mid]>target) right=mid-1;
            }
            return res.status(200).json({success:"Target value is not present in the Array"});
        }
        else{
            return res.status(400).json({error:"Data is not in the form of Array.."})
        }

    }
    catch(error)
    {
        return res.status(400).json({message:error});
    }

});

app.listen(3000 , ()=>{
    console.log("Port is working at 3000");
});