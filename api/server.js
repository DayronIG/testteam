const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
/// Load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const products = require('./routes/product');

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/v1/products', products);
// app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `)
);

/// handle unahadled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
