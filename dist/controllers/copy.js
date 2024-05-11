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
const { Copy } = models_1.default;
const createCopy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, bookId } = req.body;
    try {
        const book = yield Book.findOne({
            where: { id: bookId },
        });
        if (!book)
            return res.json({ message: "The book doesn't exist." });
        yield Copy.create({
            status,
            bookId,
        });
        return res
            .status(200)
            .send({ message: "Copy is created successfully." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Couldn't create the book." });
    }
});
const updateCopy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const copy = yield Copy.findOne({
            where: { id },
        });
        if (!copy) {
            return res
                .status(400)
                .json({ message: "There isn't any Copy of this id exists." });
        }
        yield Copy.update(req.body, {
            where: { id },
        });
        return res.json({ message: "Book copy details updated successfully" });
    }
    catch (err) {
        return res.json({ message: "Couldn't update book copy details." });
    }
});
const getAllCopies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const copies = yield Copy.findAll();
        return res.status(200).json(copies);
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).send({ message: "Couldn't retrieve copies." });
    }
});
const getCopyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const copy = yield Copy.findOne({
            where: { id },
        });
        if (!copy) {
            return res.status(404).send({ message: `Copy with id ${id} not found.` });
        }
        return res.json(copy);
    }
    catch (err) {
        res.status(500).send({ message: "Couldn't retrieve the copy" });
    }
});
const deleteCopy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const copy = yield Copy.findOne({
            where: { id },
        });
        if (!copy) {
            return res
                .status(404)
                .send({ message: "There isn't any Book copy of this id exists." });
        }
        yield copy.destroy();
        return res.json({ message: "Book copy deleted successfully" });
    }
    catch (err) {
        console.log("error", err);
        return res.status(400).json({ message: "Couldn't delete the book copy." });
    }
});
module.exports = {
    createCopy,
    updateCopy,
    getAllCopies,
    getCopyById,
    deleteCopy
};
