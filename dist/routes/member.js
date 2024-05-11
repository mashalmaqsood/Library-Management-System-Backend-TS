"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const { createMember, updateMember, getAllMembers, getMemberById, deleteMember } = require("../controllers/member");
const { ValidateCreateMember, ValidateUpdateMember, ValidateIdInt } = require("../middleware/MemberValidators");
const router = express_1.default.Router();
router.post("/createMember", ValidateCreateMember, createMember);
router.patch("/updateMember/:id", ValidateIdInt, ValidateUpdateMember, updateMember);
router.get("/getAllMembers", getAllMembers);
router.get("/getMemberById/:id", ValidateIdInt, getMemberById);
router.delete("/deleteMember/:id", ValidateIdInt, deleteMember);
module.exports = router;
