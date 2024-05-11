"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const { createTransaction, updateTransaction, getAllTransactions, getTransactionById, deleteTransaction, } = require("../controllers/transaction");
const { ValidateCreateTransaction, ValidateUpdateTransaction, ValidateIdInt, } = require("../middleware/TransactionValidators");
const router = express_1.default.Router();
router.post("/createTransaction", ValidateCreateTransaction, createTransaction);
router.patch("/updateTransaction/:id", ValidateIdInt, ValidateUpdateTransaction, updateTransaction);
router.get("/getAllTransactions", getAllTransactions);
router.get("/getTransactionById/:id", ValidateIdInt, getTransactionById);
router.delete("/deleteTransaction/:id", ValidateIdInt, deleteTransaction);
module.exports = router;
