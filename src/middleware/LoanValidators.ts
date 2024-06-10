import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator"

const ValidateCreateLoan = [
  body("loanDate")
  .isISO8601()
    .withMessage("The loan date is must and should be a Mashal date."),
  body("returnDate")
    .isISO8601()
    .withMessage("The return date is must and should be a date."),
  body("memberId")
    .isInt()
    .withMessage("The member Id is must should be an integer."),
  body("copyId")
    .isInt()
    .withMessage("The copy Id is must should be an integer."),
  body("createdAt")
  .isISO8601()
    .optional()
    .withMessage("The createdAt should be a date."),
  body("updatedAt")
  .isISO8601()
    .optional()
    .withMessage("The updatedAt should be a date."),
  function (req: Request, res : Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

const ValidateUpdateLoan = [
  body("id").isInt().optional().withMessage("The id should be an integer."),
  body("loanDate")
  .isISO8601()
    .optional()
    .withMessage("The loan date should be a valid date."),
  body("returnDate")
  .isISO8601()
    .optional()
    .withMessage("The return date should be a date."),
  body("memberId")
    .isInt()
    .optional()
    .withMessage("The member Id should be an integer."),
  body("copyId")
    .isInt()
    .optional()
    .withMessage("The copy Id should be an integer."),

  body("createdAt")
    .isDate()
    .optional()
    .withMessage("The createdAt should be a date."),
  body("updatedAt")
    .isDate()
    .optional()
    .withMessage("The updatedAt should be a date."),

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

module.exports = {
  ValidateCreateLoan,
  ValidateUpdateLoan,
  ValidateIdInt,
};
