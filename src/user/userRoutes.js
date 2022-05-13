const { Router } = require("express");

const { addUser, listUsers, updateUser, deleteUser, login} = require("./userController");
const { hashPassword, verifyPassword } = require("../middleware");

const userRouter = Router();

userRouter.post("/user",hashPassword, addUser);
userRouter.post("/user/login", verifyPassword, login)

userRouter.get("/user", listUsers)
userRouter.put("/user", updateUser)
userRouter.delete("/user", deleteUser)

module.exports = userRouter;