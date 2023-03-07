import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRouter from './routes/user.router';
import categoryBookRouter from './routes/categoryBook.router';
import bookRouter from './routes/book.router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/category_book', categoryBookRouter);
app.use('/api/v1/book', bookRouter);

export default app;
