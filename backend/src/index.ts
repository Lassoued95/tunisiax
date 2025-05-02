import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import userModel from './models/userModel';
import cors from 'cors';
import bcrypt from 'bcrypt'

// Before your routes




const app = express();
const port = 5000;
app.use(cors());

app.use(express.json()); // required to parse JSON bodies

mongoose
.connect('mongodb://localhost:27017/tunisiax')
.then(() => {console.log('Connected to MongoDB');})
.catch((err) => {console.error('Error connecting to MongoDB', err);});

const createAdmin = async () => {
    await userModel.deleteOne({role:"admin" });
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await userModel.create({
    firstName: "Admin",
    lastName: "Principal",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin",
  });
  console.log("Admin créé !");
};

createAdmin();

app.use('/user' , userRoute)


app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})