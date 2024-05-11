// const express = require("express");
import express from "express";
const {
  createCopy,
  updateCopy,
  getAllCopies,
  getCopyById,
  deleteCopy,
} = require("../controllers/copy");
const { ValidateCreateCopy, ValidateUpdateCopy , ValidateIdInt} = require("../middleware/CopyValidators");
const router = express.Router();

router.post("/createCopy", ValidateCreateCopy,createCopy);
router.patch("/updateCopy/:id",ValidateIdInt, ValidateUpdateCopy,updateCopy);

router.get("/getAllCopies", getAllCopies);
router.get("/getCopyById/:id",ValidateIdInt,getCopyById);
router.delete("/deleteCopy/:id",ValidateIdInt,deleteCopy);

module.exports = router;

