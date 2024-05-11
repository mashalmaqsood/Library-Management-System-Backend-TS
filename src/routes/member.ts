// const express = require("express");
import express from "express";
const {  createMember,
    updateMember,
    getAllMembers,
    getMemberById,
    deleteMember } = require("../controllers/member");
const { ValidateCreateMember, ValidateUpdateMember, ValidateIdInt} = require("../middleware/MemberValidators");
const router = express.Router();

router.post("/createMember",ValidateCreateMember,createMember);
router.patch("/updateMember/:id", ValidateIdInt,ValidateUpdateMember, updateMember);
router.get("/getAllMembers", getAllMembers);
router.get("/getMemberById/:id", ValidateIdInt,getMemberById);
router.delete("/deleteMember/:id", ValidateIdInt,deleteMember);

module.exports = router;
