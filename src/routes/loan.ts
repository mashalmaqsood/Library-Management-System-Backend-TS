// const express = require("express");
import express from "express";
const {
  createLoan,
  updateLoan,
  getAllLoans,
  getLoanById,
  deleteLoan,
} = require("../controllers/loan");
const {
  ValidateCreateLoan,
  ValidateUpdateLoan,
  ValidateIdInt,
} = require("../middleware/LoanValidators");
const router = express.Router();

router.post("/createLoan", ValidateCreateLoan, createLoan);
router.patch("/updateLoan/:id", ValidateIdInt, ValidateUpdateLoan, updateLoan);
router.get("/getAllLoans", getAllLoans);
router.get("/getLoanById/:id", ValidateIdInt, getLoanById);
router.delete("/deleteLoan/:id", ValidateIdInt, deleteLoan);

module.exports = router;
