import express from 'express'
import { createContact, getAllContacts } from '../controllers/contact.controller'
import { authorize,protect } from '../middlewares/auth.middleware'

const contactRouter = express.Router();

contactRouter.post("/",createContact);
contactRouter.get("/",protect,authorize("admin"), getAllContacts);

export default contactRouter;