import express from 'express'
import { protect } from '../middlewares/auth.middleware'
import { getProfile, getPublicProfile, updateProfile } from '../controllers/user.controller'
import upload from '../middlewares/upload.middleware';

const userRouter = express.Router();

userRouter.get("/profile",protect,getProfile)
userRouter.put("/profile",protect,upload.single("profilePic"), updateProfile)
userRouter.get("/public/:id",getPublicProfile)

export default userRouter;