import { Request, Response } from "express";

import db from "../db/models";
const { Transaction } = db;

const createTransaction = async (req: Request, res: Response) => {
  const { transactionDate, transactionType, amount, copyId, memberId } =
    req.body;
  try {
    await Transaction.create({
      transactionDate,
      transactionType,
      amount,
      copyId,
      memberId,
    });
    return res
      .status(200)
      .send({ message: "Transaction created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create transaction." });
  }
};

const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOne({
      where: { id },
    });
    if (!transaction) {
      return res
        .status(400)
        .json({ message: "There isn't any transaction of this id exists." });
    }
    await Transaction.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Transaction details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update transaction details." });
  }
};

const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.findAll();
    return res.json(transactions);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve transactions." });
  }
};

const getTransactionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOne({
      where: { id },
    });
    if (!transaction) {
      return res
        .status(404)
        .send({ message: "There isn't any transaction of this id exists." });
    }
    return res.json(transaction);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the transaction" });
  }
};

const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findOne({
      where: { id },
    });
    if (!transaction) {
      return res
        .status(404)
        .send({ message: "There isn't any transaction of this id exists." });
    }
    await transaction.destroy();
    return res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.json({ message: "Couldn't delete the transaction." });
  }
};

module.exports = {
  createTransaction,
  updateTransaction,
  getAllTransactions,
  getTransactionById,
  deleteTransaction,
};
