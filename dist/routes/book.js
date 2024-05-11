"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { createBook, updateBook, getAllBooks, deleteBook, getBookById } = require("../controllers/book");
const { ValidateCreateBook, ValidateIdInt, ValidateUpdateBook } = require("../middleware/bookvalidators");
const router = express_1.default.Router();
router.post("/createBook", ValidateCreateBook, createBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", ValidateIdInt, getBookById);
router.patch("/updateBook/:id", ValidateIdInt, ValidateUpdateBook, updateBook);
router.delete("/deleteBook/:id", ValidateIdInt, deleteBook);
module.exports = router;
