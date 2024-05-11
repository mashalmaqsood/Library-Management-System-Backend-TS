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
const { Transaction } = models_1.default;
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionDate, transactionType, amount, copyId, memberId } = req.body;
    try {
        yield Transaction.create({
            transactionDate,
            transactionType,
            amount,
            copyId,
            memberId,
        });
        return res
            .status(200)
            .send({ message: "Transaction created successfully." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Couldn't create transaction." });
    }
});
const updateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const transaction = yield Transaction.findOne({
            where: { id },
        });
        if (!transaction) {
            return res
                .status(400)
                .json({ message: "There isn't any transaction of this id exists." });
        }
        yield Transaction.update(req.body, {
            where: { id },
        });
        return res.json({ message: "Transaction details updated successfully" });
    }
    catch (err) {
        return res.json({ message: "Couldn't update transaction details." });
    }
});
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield Transaction.findAll();
        return res.json(transactions);
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).send({ message: "Couldn't retrieve transactions." });
    }
});
const getTransactionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const transaction = yield Transaction.findOne({
            where: { id },
        });
        if (!transaction) {
            return res
                .status(404)
                .send({ message: "There isn't any transaction of this id exists." });
        }
        return res.json(transaction);
    }
    catch (err) {
        res.status(500).send({ message: "Couldn't retrieve the transaction" });
    }
});
const deleteTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const transaction = yield Transaction.findOne({
            where: { id },
        });
        if (!transaction) {
            return res
                .status(404)
                .send({ message: "There isn't any transaction of this id exists." });
        }
        yield transaction.destroy();
        return res.json({ message: "Transaction deleted successfully" });
    }
    catch (err) {
        console.log("error", err);
        return res.json({ message: "Couldn't delete the transaction." });
    }
});
module.exports = {
    createTransaction,
    updateTransaction,
    getAllTransactions,
    getTransactionById,
    deleteTransaction,
};
