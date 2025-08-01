import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import handler from './api/sendEmail.js';

dotenv.config(); // Nạp biến môi trường

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/sendEmail', handler); // Chỉ giữ một route

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ API server đang chạy tại http://localhost:${PORT}`);
});