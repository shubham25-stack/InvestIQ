import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//connecting db through env file
connectDB(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/portfolios', portfolioRoutes); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handlers
app.use(notFound);
app.use(errorHandler);

if(process.env.NODE_ENV !== "production"){ //condition for localhost
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

}