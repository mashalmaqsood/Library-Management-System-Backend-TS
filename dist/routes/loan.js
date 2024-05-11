"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const { createLoan, updateLoan, getAllLoans, getLoanById, deleteLoan, } = require("../controllers/loan");
const { ValidateCreateLoan, ValidateUpdateLoan, ValidateIdInt, } = require("../middleware/LoanValidators");
const router = express_1.default.Router();
router.post("/createLoan", ValidateCreateLoan, createLoan);
router.patch("/updateLoan/:id", ValidateIdInt, ValidateUpdateLoan, updateLoan);
router.get("/getAllLoans", getAllLoans);
router.get("/getLoanById/:id", ValidateIdInt, getLoanById);
router.delete("/deleteLoan/:id", ValidateIdInt, deleteLoan);
module.exports = router;
