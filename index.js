const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=4000;
app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://Anand:nithya@cluster0.pjl0yzz.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Anand Nithya")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("Server has lost")
})
app.post("/register",(req,res)=>{
    //const {email,passcode}=req.body;
    const email="ram@gmail.com",passcode="123333336"
    const newFrontendUser=new Register({
        username:email,
        password:passcode
    })
    newFrontendUser.save()
})
app.listen(port,()=>console.log("Server is running on port",port))