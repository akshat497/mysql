import userController from "../controllers/userController.js";
import express from "express"
import { authorization } from "../middleware/auth.js";
const router = express.Router();
//usercontrollers
router.post('/create',userController.create)
router.get('/get',authorization,userController.geAllUsers)

router.post('/Login',userController.Login)




export default router