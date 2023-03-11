import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const corsOptions ={
    origin:'https://memories-be-nhkblog.onrender.com', 
    credentials:true,   
    optionSuccessStatus:200
}
const db = `mongodb+srv://kaneblog123:Kha123abcd@cluster0.70y58df.mongodb.net/memories_blog`;
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on the port : ${PORT}`)))
    .catch((error) => console.log(error.message));




app.use(bodyParser.json({ limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb",extended: true}));
app.use(cors(corsOptions));
app.use('/posts' , postRoutes);
app.use('/user' , userRoutes);
app.get('/', (req, res) =>{
    res.send("APP IS RUNNING");
});





