import { Request, Response } from "express";

import db from "../db/models"
const { Book } = db;
const {Copy} = db;

const createCopy = async (req: Request, res: Response) => {
  const { status, bookId } = req.body;
  try {
    const book = await Book.findOne({
      where: { id: bookId },
    });
    if (!book) return res.json({ message: "The book doesn't exist." });
    await Copy.create({
      status,
      bookId,

    });
    return res
      .status(200)
      .send({ message: "Copy is created successfully."});
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Couldn't create the book." });
  }
};

const updateCopy = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const copy = await Copy.findOne({
      where: { id },
    });
    if(!copy){
      return res
      .status(400)
      .json({ message: "There isn't any Copy of this id exists." });
    }
    await Copy.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Book copy details updated successfully" });
  } catch (err) {
    return res.json({ message: "Couldn't update book copy details." });
  }
};

const getAllCopies = async (req: Request, res : Response) => {
  try {
    const copies = await Copy.findAll();
    return res.status(200).json(copies);
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "Couldn't retrieve copies." });
  }
};

const getCopyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const copy = await Copy.findOne({
      where: { id },
    });
    if (!copy) {
      return res.status(404).send({ message: `Copy with id ${id} not found.` });
    }
    return res.json(copy);
  } catch (err) {
    res.status(500).send({ message: "Couldn't retrieve the copy" });
  }
};

const deleteCopy = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const copy = await Copy.findOne({
      where: { id },
    });
    if (!copy) {
      return res
        .status(404)
        .send({ message: "There isn't any Book copy of this id exists." });
    }
    await copy.destroy();
    return res.json({ message: "Book copy deleted successfully" });
  } catch (err) {
    console.log("error", err);
    return res.status(400).json({ message: "Couldn't delete the book copy." });
  }
};

module.exports = {
  createCopy,
  updateCopy,
  getAllCopies,
  getCopyById,
  deleteCopy
};
