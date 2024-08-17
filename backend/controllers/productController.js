import Product from "../models/productModel.js"

// --------------- === Admin === ---------------

//create Product 
export const createProduct = async (req, res, next) => {

    const product = await Product.create(req.body)

    if (!product) {
        res.status(401).json({
            success: false,
            message: "error"
        })
    }

    res.status(201).json({
        success: true,
        product,
    })
}
// update product 
export const updateProduct = async (req, res) => {

    try {

        const productId = req.params.id
        const updatedData = req.body
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData)

        if (!updatedProduct) {
            res.status(401).json({

                message: "product not found",
                success: false
            })
        }

        res.status(200).json({

            message: "product found",
            success: true
        })
    } catch (error) {
        console.log("error in updateProduct = ", error)
    }
}

// Delete Product

export const deleteProduct = async (req, res) => {

    try {
        const productId = req.params.id
        console.log("productId = ", productId)
        let product = await Product.findById(productId)

        if (!product) {

            return res.status(401).json({
                message: "Product not found",
                success: false
            })
        }

        product = await Product.findByIdAndDelete(productId)

        return res.status(201).json({

            message: "Product Deleted",
            success: true
        })

    } catch (error) {
        console.log("error in deleteProduct = ", error)
    }
}

// getAllProducts
export const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find()

        if (!products) {

            res.status(401).json({
                success: false,
                message: "error",
            })
        }

        res.status(201).json({
            success: true,
            products
        })
    } catch (error) {
        console.log("error in getAllProducts = ", error)
    }
}