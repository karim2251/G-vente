const joi = require('joi');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// const photoSchema = joi.object({
//     mimetype:joi.string().valid('image/jpeg', 'image/png', 'image/gif').required(),
//     size:joi.number().max(1048576).required()
// })

// const productValidation= joi.object({
//      nom: joi.string().required(),
//      marque: joi.string().required(),
//      prix: joi.number().required(),
//      qtestock: joi.number().required()
     
// })

// get all products
const getAllProducts = async (req, res) => {
    try {

      const products = await Product.find();
      return res.json(products)

    } catch (error) {
        return res.status(500).json({error:error.message});
    }

};

// get a single product
const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({error:'Product not found'});
      }
      return res.json( product );
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
  };

  // Create a new product
const createProduct = async (req, res) => {
    try {
        // console.log(req.files);
        // console.log(req.files.photo.name);
        // validation 
        // const {error} = productValidation.validate({
        //         nom:req.body.nom,
        //         marque:req.body.marque,
        //         prix:req.body.prix,
        //         qtestock:req.body.qtestock
        //         // photo:req.files.photo
        // });
        // if(error){
        //     return res.status(400).json({ message: error.details[0].message });
        // }else{

            const  image  = req.files.photo;
            // console.log(image);
            const datecurr = new Date();
            const formatdate = datecurr.toISOString().slice(0, 16).replace(/[^\d]/g, '-');

            // rename image
            const renameImage = formatdate + req.body.nom + path.extname(image.name)
            // path where up;oad it
            const uploadDir = path.join(__dirname, `..`, `public/productsImage`)

            if (!image) return res.status(400).json({ title: "select the image required !!!" });

            // If does not have image mime type prevent from uploading
            if (!/^image/.test(image.mimetype)) {
                   return res.status(400).json({ title: "this is not image !!!" });
            }else{

                image.mv(uploadDir + "/" + renameImage)
            }

            const product = new Product({
                nom:req.body.nom,
                marque:req.body.marque,
                prix:req.body.prix,
                qtestock:req.body.qtestock,
                photo:renameImage
            });
            await product.save()
             .then((result)=>{
                return res.json({product})
             })
             .catch((err)=>{
                return res.status(404).json({error:'Product not insert it'})
             })
        // }
    }catch{
        return res.status(500).json({error:"Product not insert it you have problem"});
    }
  };

  // Update a produit
  const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found to update" });
        }

        const oldPhoto = product.photo;
        const image = req.files.photo;

        if (!image) {
            return res.status(400).json({ title: "Select the image required!!!" });
        }

        const datecurr = new Date();
        const formatdate = datecurr.toISOString().slice(0, 16).replace(/[^\d]/g, '-');
        const renameImage = formatdate + req.body.nom + path.extname(image.name);
        const uploadDir = path.join(__dirname, '..', 'public', 'productsImage');

        if (!/^image/.test(image.mimetype)) {
            return res.status(400).json({ title: "This is not an image!!!" });
        }

        image.mv(path.join(uploadDir, renameImage), async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Failed to upload image" });
            }

            try {
                await Product.findByIdAndUpdate(req.params.id, {
                    nom: req.body.nom,
                    marque: req.body.marque,
                    prix: req.body.prix,
                    qtestock: req.body.qtestock,
                    photo: renameImage
                });
                    fs.unlinkSync(path.join(uploadDir, oldPhoto))
                    return res.json({ message: "Updated successfully" });
                
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: "Failed to update product" });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const uploadDir = path.join(__dirname, '..', 'public', 'productsImage');
        Product.findByIdAndDelete(req.params.id)
        .then((result)=>{
            
            fs.unlinkSync(path.join(uploadDir,result.photo))
            res.status(200).json({message:"deleted successfuly"})
            
        })
        .catch((err)=>{
            res.status(400).json({error:err,message:"failed to delete it"})
        })
     
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
// exports methods
module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct

}