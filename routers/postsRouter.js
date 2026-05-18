import express from "express"
const router = express.Router();

import {Index, Show, Create, Update, PartiallyUpdate, Destroy} from "../controllers/postsController.js"

//index
router.get("/", Index)

//Show
router.get("/:id", Show)

//Create
router.post("/", Create)

//Update
router.put("/:id", Update)

//Update
router.patch("/:id", PartiallyUpdate)

//Delete
router.delete("/:id", Destroy)

export default router;