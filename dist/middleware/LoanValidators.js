"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ValidateCreateLoan = [
    (0, express_validator_1.body)("loanDate")
        .isISO8601()
        .withMessage("The loan date is must and should be a Mashal date."),
    (0, express_validator_1.body)("returnDate")
        .isISO8601()
        .withMessage("The return date is must and should be a date."),
    (0, express_validator_1.body)("memberId")
        .isInt()
        .withMessage("The member Id is must should be an integer."),
    (0, express_validator_1.body)("copyId")
        .isInt()
        .withMessage("The copy Id is must should be an integer."),
    (0, express_validator_1.body)("createdAt")
        .isISO8601()
        .optional()
        .withMessage("The createdAt should be a date."),
    (0, express_validator_1.body)("updatedAt")
        .isISO8601()
        .optional()
        .withMessage("The updatedAt should be a date."),
    function (req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
const ValidateUpdateLoan = [
    (0, express_validator_1.body)("id").isInt().optional().withMessage("The id should be an integer."),
    (0, express_validator_1.body)("loanDate")
        .isISO8601()
        .optional()
        .withMessage("The loan date should be a valid date."),
    (0, express_validator_1.body)("returnDate")
        .isISO8601()
        .optional()
        .withMessage("The return date should be a date."),
    (0, express_validator_1.body)("memberId")
        .isInt()
        .optional()
        .withMessage("The member Id should be an integer."),
    (0, express_validator_1.body)("copyId")
        .isInt()
        .optional()
        .withMessage("The copy Id should be an integer."),
    (0, express_validator_1.body)("createdAt")
        .isDate()
        .optional()
        .withMessage("The createdAt should be a date."),
    (0, express_validator_1.body)("updatedAt")
        .isDate()
        .optional()
        .withMessage("The updatedAt should be a date."),
    function (req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
const ValidateIdInt = [
    (0, express_validator_1.param)("id").isInt().withMessage("This is not a valid id."),
    function (req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
module.exports = {
    ValidateCreateLoan,
    ValidateUpdateLoan,
    ValidateIdInt,
};
