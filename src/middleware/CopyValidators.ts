import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator"
const ValidateCreateCopy = [
  body("id").isInt().optional().withMessage("The id should be an integer."),
  body("status")
    .isString()
    .withMessage("The status is must and should be a string."),
  body("bookId")
    .isInt()
    .withMessage("The book id is must and should be an integer."),
  body("createdAt")
    .isDate()
    .optional()
    .withMessage("The createdAt is must and should be a date."),
  body("updatedAt")
    .isDate()
    .optional()
    .withMessage("The updatedAt is must and should be a date."),

  function (req : Request, res : Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Invalid Input Data", error: errors.array() });
    }
    next();
  },
];

const ValidateUpdateCopy = [
  body("id").isInt().optional().withMessage("The id should be an integer."),
  body("status")
    .isString()
    .optional()
    .withMessage("The status should be a string."),
  body("bookId")
    .isInt()
    .optional()
    .withMessage("The book id should be an integer."),
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
  function (req: Request, res: Response, next : NextFunction) {
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
  ValidateCreateCopy,
  ValidateUpdateCopy,
  ValidateIdInt,
};
