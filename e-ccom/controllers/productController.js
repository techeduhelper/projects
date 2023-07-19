import fs from 'fs'
import productModels from '../models/productModels.js'
import slugify from 'slugify'





export const createProductController = async (req, res) => {
    try {
        const { name, price, description, slug, category, quantity, shipping } = req.fields
        const { photo } = req.files
        // validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required" })
            case !price:
                return res.status(500).send({ error: "Price is required" })
            case !description:
                return res.status(500).send({ error: "Description is required" })
            case !category:
                return res.status(500).send({ error: "Category is required" })
            case !quantity:
                return res.status(500).send({ error: "Quantity is required" })
            case !photo && photo.size > 100000:
                return res.status(500).send({ error: "Photo is required & should be less than 1 mb" })
        }

        const products = new productModels({ ...req.fields, slug: slugify(name) })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(200).send({
            success: true,
            message: 'Product successfully created',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error?.message || 'Internal Server Error'
        })
    }
}


export const getProductController = async (req, res) => {
    try {
        const products = await productModels.find({}).populate("category").select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            total: products.length,
            message: "successfully fetch",
            products,
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success: false,
            message: 'product not found!',
            error
        })
    }
}


export const getSingleProduct = async (req, res) => {
    try {
        const product = await productModels.findOne({ slug: req.params.slug }).select("-photo").populate("category");
        res.status(200).send({
            success: true,
            message: 'product fetch successfully',
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success: false,
            message: 'single product not found!',
            error
        })
    }
}


// get product photo
export const getProductPhotoController = async (req, res) => {
    try {
        const product = await productModels.findById(req.params.pid).select("photo");
        if (product.photo.data) {
            res.set('Content-type', product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            msg: 'Internal Server Error',
            error
        })
    }
}


export const deleteProductController = async (req, res) => {
    try {
        await productModels.findByIdAndDelete(req.params.pid).select("-photo");
        res.status(200).send({
            success: true,
            message: `Deleted successfully`
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            msg: "Error deleting Product",
            error
        })
    }
}


// update product

export const updateProductController = async (req, res) => {
    try {
        const { name, price, description, slug, category, quantity, shipping } = req.fields
        const { photo } = req.files
        // validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required" })
            case !price:
                return res.status(500).send({ error: "Price is required" })
            case !description:
                return res.status(500).send({ error: "Description is required" })
            case !category:
                return res.status(500).send({ error: "Category is required" })
            case !quantity:
                return res.status(500).send({ error: "Quantity is required" })
            case !photo && photo.size > 100000:
                return res.status(500).send({ error: "Photo is required & should be less than 1 mb" })
        }

        const products = await productModels.findByIdAndUpdate(req.params.pid, { ...req.fields, slug: slugify(name) }, { new: true })
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(200).send({
            success: true,
            message: 'Product successfully created',
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error?.message || 'Internal Server Error'
        })
    }
}