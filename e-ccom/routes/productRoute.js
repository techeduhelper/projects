import express from "express";
import { isAdmin, requireSignIn } from "../midlewares/authMiddlewares.js";
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProduct, updateProductController } from "../controllers/productController.js";
import formidable from 'express-formidable'

const Router = express.Router();

// creating a product
Router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

// get product
Router.get('/get-product', getProductController);

// get single product
Router.get("/get-product/:slug", getSingleProduct);

// get product photo
Router.get('/product-photo/:pid', getProductPhotoController);

// delete product
Router.delete('/:pid', requireSignIn, isAdmin, deleteProductController);

// update product
Router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

export default Router;