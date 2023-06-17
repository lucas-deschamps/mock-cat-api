import express from 'express';

import { catRouter } from './api/cat.js';

const app = express();

// middleware for parsing incoming JSON
app.use(express.json());

// API routes
app.use('/cat', catRouter);

export { app };
