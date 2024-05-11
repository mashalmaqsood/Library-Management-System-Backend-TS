"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../db/models"));
const { Book } = models_1.default;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, ISBN, genre, publishedYear, publisher } = req.body;
    try {
        const bookTitle = yield Book.findOne({
            where: { title },
        });
        if (bookTitle)
            return res.json({ message: "The book already exists." });
        yield Book.create({
            title,
            author,
            ISBN,
            genre,
            publishedYear,
            publisher,
        });
        return res.status(200).send({ message: "Book created successfully." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Couldn't create the book." });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield Book.findOne({
            where: { id },
        });
        if (!book) {
            return res
                .status(400)
                .json({ message: "There isn't any Book of this id exists." });
        }
        yield Book.update(req.body, {
            where: { id },
        });
        return res.status(200).send({ message: "Book details updated successfully" });
    }
    catch (err) {
        return res.status(500).send({ message: "Couldn't update book details." });
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.findAll();
        return res.json(books);
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).send({ message: "Couldn't retrieve books." });
    }
});
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield Book.findOne({
            where: { id },
        });
        if (!book) {
            return res.status(404).send({ message: `Book with id ${id} not found.` });
        }
        return res.json(book);
    }
    catch (err) {
        res.status(500).send({ message: "Couldn't retrieve the book" });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield Book.findOne({
            where: { id },
        });
        if (!book) {
            return res.status(404).send({ message: "There isn't any Book of this id exists." });
        }
        yield book.destroy();
        return res.json({ message: "Book deleted successfully" });
    }
    catch (err) {
        console.log("error", err);
        return res.status(400).json({ message: "Couldn't delete the book." });
    }
});
module.exports = {
    createBook,
    updateBook,
    getAllBooks,
    deleteBook,
    getBookById,
};
