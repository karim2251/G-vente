const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();



// Define proxy middleware for server on port 3000
const ProductServerProxy = createProxyMiddleware('/products', {
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/products': '',
  },
});

// Define proxy middleware for server on port 3001
const UserServerProxy = createProxyMiddleware('/user', {
  target: 'http://localhost:3500',
  changeOrigin: true,
  pathRewrite: {
    '^/user': '',
  },
});

// Use the proxy middleware
app.use('/products', ProductServerProxy);
app.use('/user', UserServerProxy);

// Define routes for testing
app.get('/', (req, res) => {
  res.send('Express Proxy Server');
});

// Start the server
const PORT = process.env.PORT || 4000; // Choose any port you like
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});