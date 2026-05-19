const express = require("express");
const router = express.Router();

const {Index, Show, Create, Update, PartiallyUpdate, Destroy} = require("../controllers/postsController")

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


module.exports = router;