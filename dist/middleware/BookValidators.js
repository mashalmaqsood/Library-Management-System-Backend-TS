"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ValidateCreateBook = [
    (0, express_validator_1.body)("id")
        .isInt()
        .optional()
        .withMessage("The id should be an integer."),
    (0, express_validator_1.body)("title")
        .isString()
        .withMessage("The title is must and should be a string."),
    (0, express_validator_1.body)("author")
        .isString()
        .withMessage("The author is must and should be a string."),
    (0, express_validator_1.body)("ISBN")
        .isString()
        .withMessage("The ISBN is must and should be a string."),
    (0, express_validator_1.body)("genre")
        .isString()
        .withMessage("The genre should be a string."),
    (0, express_validator_1.body)("publishedYear")
        .isInt()
        .withMessage("The published year is must and should be an integer."),
    (0, express_validator_1.body)("genre")
        .isString()
        .optional()
        .withMessage("The genre should be a string."),
    (0, express_validator_1.body)("publisher")
        .isString()
        .withMessage("The publisher should be a string."),
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
const ValidateUpdateBook = [
    (0, express_validator_1.body)("id")
        .isInt()
        .optional()
        .withMessage("The id should be an integer."),
    (0, express_validator_1.body)("title")
        .isString()
        .withMessage("The title is must and should be a string."),
    (0, express_validator_1.body)("author")
        .isString().optional()
        .withMessage("The aathor is must and should be a string."),
    (0, express_validator_1.body)("ISBN")
        .isString()
        .optional()
        .withMessage("The ISBN should be a string."),
    (0, express_validator_1.body)("genre")
        .isString().optional()
        .withMessage("The genre should be a string."),
    (0, express_validator_1.body)("publishedYear")
        .isInt().optional()
        .withMessage("The published year should be an integer."),
    (0, express_validator_1.body)("genre")
        .isString()
        .optional()
        .withMessage("The genre should be a string."),
    (0, express_validator_1.body)("publisher")
        .isString().optional()
        .withMessage("The publisher should be a string."),
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
    ValidateCreateBook,
    ValidateUpdateBook,
    ValidateIdInt,
};
