import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// The "TS Twist": We explicitly say req is a Request and res is a Response
app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});