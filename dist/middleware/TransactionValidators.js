"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { body, param, validationResult } = require("express-validator");
const ValidateCreateTransaction = [
    // body("id").isInt().optional().withMessage("The id should be an integer."),
    body("transactionDate")
        .isISO8601()
        .withMessage("The transaction date is must and should be a date."),
    body("transactionType")
        .isString()
        .withMessage("The transaction type is must and should be a string."),
    body("amount")
        .isInt()
        .withMessage("The amount is must and it should be an integer."),
    body("copyId")
        .isInt()
        .withMessage("The copy id is must and it should be an integer."),
    body("memberId")
        .isInt()
        .withMessage("The member id is must and it should be an integer."),
    body("createdAt")
        .isDate()
        .optional()
        .withMessage("The createdAt should be a date."),
    body("updatedAt")
        .isDate()
        .optional()
        .withMessage("The updatedAt should be a date."),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
const ValidateUpdateTransaction = [
    body("id").isInt().optional().withMessage("The id should be an integer."),
    body("transactionDate")
        .isDate().optional()
        .withMessage("The transaction date should be a date."),
    body("transactionType")
        .isString().optional()
        .withMessage("The transaction type should be a string."),
    body("amount")
        .isInt().optional()
        .withMessage("The amount should be an integer."),
    body("copyId")
        .isInt().optional()
        .withMessage("The copy id should be an integer."),
    body("memberId")
        .isInt().optional()
        .withMessage("The member id should be an integer."),
    body("createdAt")
        .isDate()
        .optional()
        .withMessage("The createdAt should be a date."),
    body("updatedAt")
        .isDate()
        .optional()
        .withMessage("The updatedAt should be a date."),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
const ValidateIdInt = [
    param("id").isInt().withMessage("This is not a valid id."),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ message: "Invalid Input Data", error: errors.array() });
        }
        next();
    },
];
module.exports = {
    ValidateCreateTransaction,
    ValidateUpdateTransaction,
    ValidateIdInt,
};
