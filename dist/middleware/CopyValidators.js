"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ValidateCreateCopy = [
    (0, express_validator_1.body)("id").isInt().optional().withMessage("The id should be an integer."),
    (0, express_validator_1.body)("status")
        .isString()
        .withMessage("The status is must and should be a string."),
    (0, express_validator_1.body)("bookId")
        .isInt()
        .withMessage("The book id is must and should be an integer."),
    (0, express_validator_1.body)("createdAt")
        .isDate()
        .optional()
        .withMessage("The createdAt is must and should be a date."),
    (0, express_validator_1.body)("updatedAt")
        .isDate()
        .optional()
        .withMessage("The updatedAt is must and should be a date."),
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
const ValidateUpdateCopy = [
    (0, express_validator_1.body)("id").isInt().optional().withMessage("The id should be an integer."),
    (0, express_validator_1.body)("status")
        .isString()
        .optional()
        .withMessage("The status should be a string."),
    (0, express_validator_1.body)("bookId")
        .isInt()
        .optional()
        .withMessage("The book id should be an integer."),
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
    ValidateCreateCopy,
    ValidateUpdateCopy,
    ValidateIdInt,
};
