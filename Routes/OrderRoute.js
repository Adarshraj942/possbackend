import express from  "express"
import { cancel, create, edit } from "../Controllers/OrderController.js";

const router =express.Router();


router.post("/create",create)
router.post("/edit",edit)
router.post("/cancel",cancel)




export default router 