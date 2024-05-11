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
const { Member } = models_1.default;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, address } = req.body;
    try {
        const member = yield Member.findOne({
            where: { email },
        });
        if (member)
            return res.json({ message: "The member already exists." });
        yield Member.create({
            name,
            email,
            phone,
            address,
        });
        return res.status(200).send({ message: "Member created successfully." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Couldn't create member." });
    }
});
const updateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield Member.findOne({
            where: { id },
        });
        if (!member) {
            return res
                .status(400)
                .json({ message: "There isn't any member of this id exists." });
        }
        yield Member.update(req.body, {
            where: { id },
        });
        return res.json({ message: "Member details updated successfully" });
    }
    catch (err) {
        return res.json({ message: "Couldn't update member details." });
    }
});
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield Member.findAll();
        return res.json(members);
    }
    catch (err) {
        console.log("error", err);
        return res.status(500).send({ message: "Couldn't retrieve members." });
    }
});
const getMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield Member.findOne({
            where: { id },
        });
        if (!member) {
            return res
                .status(404)
                .send({ message: `Member with id ${id} not found.` });
        }
        return res.json(member);
    }
    catch (err) {
        res.status(500).send({ message: "Couldn't retrieve the member" });
    }
});
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const member = yield Member.findOne({
            where: { id },
        });
        if (!member) {
            return res
                .status(404)
                .send({ message: "There isn't any member of this id exists." });
        }
        yield member.destroy();
        return res.json({ message: "Member deleted successfully" });
    }
    catch (err) {
        console.log("error", err);
        return res.json({ message: "Couldn't delete the member." });
    }
});
module.exports = {
    createMember,
    updateMember,
    getAllMembers,
    getMemberById,
    deleteMember,
};
