import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  testController,
  profileUpdateController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// Router Object
const router = express.Router();

// Routings

//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || METHOD POST
router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController);

//Test
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update profile route
router.put("/profile", requireSignIn, profileUpdateController);
//orders
router.get("/orders", requireSignIn, getOrdersController);
//All orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
