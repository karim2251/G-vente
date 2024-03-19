require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
require("./database/config")
const UserRoutes = require('./routes/UserRoute')
const OrderRoutes = require('./routes/OrderRoute')
const app = express();
const cookieparser = require('cookie-parser');


const PORT = process.env.PORT || 3500;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieparser())
// to access the image in vue js
// http://localhost:3500/productsImage/2024-02-29-18-26product4.png

// upload image
app.use(
  fileUpload({
      limits: {
          fileSize: 1048576, // Around 1MB
      },
      abortOnLimit: true,
  })
);

// user routes 
app.use('/users',UserRoutes)

// order routes 
app.use('/orders',OrderRoutes)



// app.use((req,res)=>{
//   res.status(403).render('403');
// })

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
