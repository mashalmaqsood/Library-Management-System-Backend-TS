import express from "express";
const {
  createBook,
  updateBook,
  getAllBooks,
  deleteBook ,
  getBookById
} = require("../controllers/book");
const { ValidateCreateBook, ValidateIdInt, ValidateUpdateBook } = require("../middleware/bookvalidators");
const router = express.Router();

router.post("/createBook", ValidateCreateBook,createBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", ValidateIdInt, getBookById);
router.patch("/updateBook/:id", ValidateIdInt,ValidateUpdateBook,updateBook);
router.delete("/deleteBook/:id",ValidateIdInt, deleteBook );

module.exports = router;
