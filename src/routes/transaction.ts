// const express = require("express");
import express from "express";
const {
  createTransaction,
  updateTransaction,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
} = require("../controllers/transaction");
const {
  ValidateCreateTransaction,
  ValidateUpdateTransaction,
  ValidateIdInt,
} = require("../middleware/TransactionValidators");

const router = express.Router();

router.post("/createTransaction", ValidateCreateTransaction, createTransaction);
router.patch(
  "/updateTransaction/:id",
  ValidateIdInt,
  ValidateUpdateTransaction,
  updateTransaction
);
router.get("/getAllTransactions", getAllTransactions);
router.get("/getTransactionById/:id", ValidateIdInt, getTransactionById);
router.delete("/deleteTransaction/:id", ValidateIdInt, deleteTransaction);

module.exports = router;
