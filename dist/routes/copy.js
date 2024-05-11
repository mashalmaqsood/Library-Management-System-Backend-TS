"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const { createCopy, updateCopy, getAllCopies, getCopyById, deleteCopy, } = require("../controllers/copy");
const { ValidateCreateCopy, ValidateUpdateCopy, ValidateIdInt } = require("../middleware/CopyValidators");
const router = express_1.default.Router();
router.post("/createCopy", ValidateCreateCopy, createCopy);
router.patch("/updateCopy/:id", ValidateIdInt, ValidateUpdateCopy, updateCopy);
router.get("/getAllCopies", getAllCopies);
router.get("/getCopyById/:id", ValidateIdInt, getCopyById);
router.delete("/deleteCopy/:id", ValidateIdInt, deleteCopy);
module.exports = router;
