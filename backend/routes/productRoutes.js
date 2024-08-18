import express from "express"
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from "../controllers/productController.js"

const router = express.Router()

router.route("/products").get(getAllProducts)
router.route("/new").post(createProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getOneProduct)

export default router
