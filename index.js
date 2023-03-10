import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,   
    optionSuccessStatus:200
}
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/memory_web_dev", {
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





