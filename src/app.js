import express from 'express';
import morgan from 'morgan'

const app = express(morgan('dev'));

export default app;

