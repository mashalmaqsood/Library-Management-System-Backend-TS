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
const { Loan } = models_1.default;
const createLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { loanDate, returnDate, memberId, copyId } = req.body;
    try {
        yield Loan.create({
            loanDate,
            returnDate,
            memberId,
            copyId,
        });
        return res.status(200).send({ message: "Loan created successfully." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Couldn't create loan." });
    }
});
const updateLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        console.log("working");
        const loan = yield Loan.findOne({
            where: { id },
        });
        // console.log("loan",loan);
        if (!loan) {
            return res
                .status(400)
                .json({ message: "There isn't any loan of this id exists." });
        }
        const loann = yield Loan.update(req.body, {
            where: { id },
        });
        console.log("loannn", loann);
        return res.json({ message: "Loan details updated successfully" });
    }
    catch (err) {
        return res.json({ message: "Couldn't update loan details." });
    }
});
const getAllLoans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield Loan.findAll();
        return res.json(loans);
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).send({ message: "Couldn't retrieve loans." });
    }
});
const getLoanById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const loan = yield Loan.findOne({
            where: { id },
        });
        if (!loan) {
            return res.status(404).send({ message: `Loan with id ${id} not found.` });
        }
        return res.json(loan);
    }
    catch (err) {
        res.status(500).send({ message: "Couldn't retrieve the loan" });
    }
});
const deleteLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const loan = yield Loan.findOne({
            where: { id },
        });
        if (!loan) {
            return res.status(404).send({ message: "There isn't any Loan of this id exists." });
        }
        yield loan.destroy();
        return res.json({ message: "Loan deleted successfully" });
    }
    catch (err) {
        console.log("error", err);
        return res.json({ message: "Couldn't delete the loan." });
    }
});
module.exports = {
    createLoan,
    updateLoan,
    getAllLoans,
    getLoanById,
    deleteLoan,
};
