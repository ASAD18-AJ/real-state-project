import express from 'express'
import { authorize,protect } from '../middlewares/auth.middleware'
import { approveSeller, blockUser, deleteUser, getAllInquiries, getAllUsers, getDashboardStats, getPendingSellers } from '../controllers/admin.controller'
import { deleteProperty, getAllProperties } from '../controllers/property.controller';

const adminRouter = express.Router();

adminRouter.use(protect,authorize("admin"));

adminRouter.get("/users", getAllUsers);
adminRouter.patch("/users/:id/block", blockUser);

adminRouter.delete("/users:id",deleteUser);
adminRouter.get("properties",getAllProperties);

adminRouter.delete("/properties/:id",deleteProperty)
adminRouter.get("/inquiries", getAllInquiries);

adminRouter.get("/stats", getDashboardStats);

adminRouter.get("/pending-sellers",getPendingSellers)
adminRouter.patch("/approved-seller/:id", approveSeller);

export default adminRouter;