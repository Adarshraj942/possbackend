import express from  "express"
import { all,  create, getOne} from "../Controllers/OrderController.js";

const router =express.Router();


router.post("/create",create)
router.get("/getone/:id",getOne)
// router.post("/cancel",cancel)
router.post("/all",all)




export default router 