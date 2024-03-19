require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
require("./database/config")
const produitRoutes = require('./routes/ProductRouter')
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// to access the image in vue js
// http://localhost:3000/productsImage/2024-02-29-18-26product4.png

// upload image
app.use(
  fileUpload({
      limits: {
          fileSize: 1048576, // Around 1MB
      },
      abortOnLimit: true,
  })
);

// Routes
app.use(produitRoutes);

// app.get('/',(req,res)=>{
//   res.redirect('/products')
// })

// app.use((req,res)=>{
//   res.status(403).render('403');
// })

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
