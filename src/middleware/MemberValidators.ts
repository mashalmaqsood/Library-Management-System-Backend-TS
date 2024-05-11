// const { body, param, validationResult } = require("express-validator");
import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator"

const ValidateCreateMember = [
  body("id").isInt().optional().withMessage("The id should be an integer."),
  body("name")
    .isString()
    .withMessage("The name is must and should be a string."),
  body("email")
    .isString()
    .withMessage("The email is must and should be a string."),
  body("phone")
    .isInt()
    .withMessage("The phone number is must and it should be a string."),
  body("address")
    .isString()
    .withMessage("The address is must and it should be a string."),
  body("createdAt")
    .isDate()
    .optional()
    .withMessage("The createdAt is must and should be a date."),
  body("updatedAt")
    .isDate()
    .optional()
    .withMessage("The updatedAt is must and should be a date."),

  function (req : Request, res : Response, next : NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

const ValidateUpdateMember = [
  body("id").isInt().optional().withMessage("The id should be an integer."),
  body("name")
  .isString().optional()
  .withMessage("The name is must and should be a string."),
body("email")
  .isString()
  .optional()
  .withMessage("The email is must and should be a string."),
body("phone")
  .isInt().optional()
  .withMessage("The phone number is must and it should be a string."),
body("address")
  .isString().optional()
  .withMessage("The address is must and it should be a string."),
body("createdAt")
  .isDate()
  .optional()
  .withMessage("The createdAt is must and should be a date."),
body("updatedAt")
  .isDate()
  .optional()
  .withMessage("The updatedAt is must and should be a date."),

  function (req : Request, res: Response, next: NextFunction) {
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
  function (req :  Request, res: Response, next : NextFunction) {
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
  ValidateCreateMember,
  ValidateUpdateMember,
  ValidateIdInt,
};
