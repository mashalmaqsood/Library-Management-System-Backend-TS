import request from "supertest";
import models from "../../src/db/models"
import app from "../../src/index"

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all loans", () => {
  it("Should return array of loans.", async () => {
    let res = await request(app).get("/api/loan/getAllLoans");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get Loan by id", () => {
  test("Should return the object of copy of the given id.", async () => {
    let res = await request(app).get("/api/loan/getLoanById/1");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(1);
    expect(Object.keys(res.body).length).toBe(7);
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).get("/api/loan/getLoanById/tuwy");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/loan/getLoanById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a loan record", () => {
  it("should return a success message when a record is created", async () => {
    let res = await request(app).post("/api/loan/createLoan").send({
      loanDate: "2024-06-07",
      returnDate: "2024-06-17",
      memberId: 1,
      copyId: 1,
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Loan created successfully.");
  });

  it("should return an error if required field is missing", async () => {
    let res = await request(app).post("/api/loan/createLoan").send({
      loanDate: "2024-06-07",
      // returnDate: "2024-06-17",
      memberId: 1,
      copyId: 1,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if any field's type is not correct.", async () => {
    let res = await request(app).post("/api/loan/createLoan").send({
      loanDate: "2024-06-07",
      returnDate: 76,
      memberId: 1,
      copyId: 1,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
});

describe("Update loan details for the given id", () => {
  it("should return a success message when a record is updated", async () => {
    let res = await request(app).patch("/api/loan/updateLoan/1").send({
      // loanDate: "2024-06-07",
      // returnDate: "2024-06-18",
      memberId: 1,
      copyId: 1,
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Loan details updated successfully",
    });
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).patch("/api/loan/updateLoan/webfw").send({
      returnDate: "2024-06-18",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist in records.", async () => {
    let res = await request(app).patch("/api/loan/updateLoan/100").send({
      // returnDate: "2024-06-18",
      copyId: 1,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any loan of this id exists.");
  });
});

describe("Delete the loan record for given id", () => {
  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).delete("/api/loan/deleteLoan/uyt");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).delete("/api/loan/deleteLoan/100");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any Loan of this id exists.");
  });
});
