import { Request, Response } from "express";

import db from "../db/models"
const { Loan } = db;

const createLoan = async (req: Request, res: Response) => {
  const { loanDate, returnDate, memberId, copyId } = req.body;
  try {
    await Loan.create({
      loanDate,
      returnDate,
      memberId,
      copyId,
    });
    return res.status(200).send({ message: "Loan created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create loan." });
  }
};

const updateLoan = async (req : Request, res: Response) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findOne({
      where: { id },
    });
    if(!loan){
      return res
      .status(400)
      .json({ message: "There isn't any loan of this id exists." });
    }
    await Loan.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Loan details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update loan details." });
  }
};

const getAllLoans = async (req : Request, res: Response) => {
  try {
    const loans = await Loan.findAll();
    return res.json(loans);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve loans." });
  }
};

const getLoanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findOne({
      where: { id },
    });
    if (!loan) {
      return res.status(404).send({ message: `Loan with id ${id} not found.` });
    }
    return res.json(loan);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the loan" });
  }
};

const deleteLoan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findOne({
      where: { id },
    });
    if (!loan) {
      return res.status(404).send({ message: "There isn't any Loan of this id exists."});
    }
    await loan.destroy();
    return res.json({ message: "Loan deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.json({ message: "Couldn't delete the loan." });
  }
};

module.exports = {
  createLoan,
  updateLoan,
  getAllLoans,
  getLoanById,
  deleteLoan,
};
