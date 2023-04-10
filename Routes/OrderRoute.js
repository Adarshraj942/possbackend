import express from  "express"
import { all,  create, edit } from "../Controllers/OrderController.js";

const router =express.Router();


router.post("/create",create)
router.post("/edit",edit)
// router.post("/cancel",cancel)
router.post("/all",all)




export default router 