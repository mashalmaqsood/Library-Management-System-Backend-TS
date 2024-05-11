import request from "supertest";
import models from "../../src/db/models"
import app from "../../src/index"

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all Transactions", () => {
    
  it("Should return array of loans.", async () => {
    let res = await request(app).get("/api/transaction/getAllTransactions");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get Transaction by id", () => {
  test("Should return the object of copy of the given id.", async () => {
    let res = await request(app).get("/api/transaction/getTransactionById/1");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(1);
    expect(Object.keys(res.body).length).toBe(8);
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).get(
      "/api/transaction/getTransactionById/tuwy"
    );
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/transaction/getTransactionById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a transaction record", () => {
  it("should return a success message when a record is created", async () => {
    let res = await request(app).post("/api/transaction/createTransaction").send({
      transactionDate: "2024-05-27",
      transactionType: "Renewal",
      amount: 400,
      copyId: 1,
      memberId: 1,
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Transaction created successfully.");
  });

  it("should return an error if required field is missing", async () => {
    let res = await request(app).post("/api/transaction/createTransaction").send({
        transactionDate: "2024-05-27",
        // transactionType: "Renewal",
        amount: 400,
        copyId: 1,
        memberId: 1,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if any field's type is not correct.", async () => {
    let res = await request(app).post("/api/transaction/createTransaction").send({
        transactionDate: "2024-05-27",
        transactionType: 87,
        amount: 400,
        copyId: 1,
        memberId: 1,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
});

describe("Update transaction details for the given id", () => {
  it("should return a success message when a record is updated", async () => {
    let res = await request(app).patch("/api/transaction/updateTransaction/1").send({
        amount: 500
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Transaction details updated successfully",
    });
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).patch("/api/transaction/updateTransaction/webfw").send({
        amount: 500
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist in records.", async () => {
    let res = await request(app).patch("/api/transaction/updateTransaction/100").send({
        amount: 500
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any transaction of this id exists.");
  });
});

describe("Delete the transaction record for given id", () => {
  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).delete("/api/transaction/deleteTransaction/juhuy");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).delete("/api/transaction/deleteTransaction/100");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any transaction of this id exists.");
  });
});
