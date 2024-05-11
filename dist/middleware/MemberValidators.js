"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ValidateCreateMember = [
    (0, express_validator_1.body)("id").isInt().optional().withMessage("The id should be an integer."),
    (0, express_validator_1.body)("name")
        .isString()
        .withMessage("The name is must and should be a string."),
    (0, express_validator_1.body)("email")
        .isString()
        .withMessage("The email is must and should be a string."),
    (0, express_validator_1.body)("phone")
        .isInt()
        .withMessage("The phone number is must and it should be a string."),
    (0, express_validator_1.body)("address")
        .isString()
        .withMessage("The address is must and it should be a string."),
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
const ValidateUpdateMember = [
    (0, express_validator_1.body)("id").isInt().optional().withMessage("The id should be an integer."),
    (0, express_validator_1.body)("name")
        .isString().optional()
        .withMessage("The name is must and should be a string."),
    (0, express_validator_1.body)("email")
        .isString()
        .optional()
        .withMessage("The email is must and should be a string."),
    (0, express_validator_1.body)("phone")
        .isInt().optional()
        .withMessage("The phone number is must and it should be a string."),
    (0, express_validator_1.body)("address")
        .isString().optional()
        .withMessage("The address is must and it should be a string."),
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
    ValidateCreateMember,
    ValidateUpdateMember,
    ValidateIdInt,
};
