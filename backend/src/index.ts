import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';


const app = express();
const port = 5000;

app.use(express.json()); // required to parse JSON bodies

mongoose
.connect('mongodb://localhost:27017/tunisiax')
.then(() => {console.log('Connected to MongoDB');})
.catch((err) => {console.error('Error connecting to MongoDB', err);});

app.use('/user' , userRoute)


app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})