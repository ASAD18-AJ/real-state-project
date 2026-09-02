import express from 'express'
import { protect } from '../middlewares/auth.middleware'
import { addWishlist, getWishlist, removeWishlist } from '../controllers/wishlist.controller'

const wishlistRouter = express.Router();

wishlistRouter.post("/:propertyId",protect,addWishlist)
wishlistRouter.get("/",protect,getWishlist)
wishlistRouter.delete("/:propertyId", protect, removeWishlist)

export default wishlistRouter;