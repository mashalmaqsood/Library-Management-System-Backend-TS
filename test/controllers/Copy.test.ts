import request from "supertest";
import models from "../../src/db/models"
import app from "../../src/index"

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all copies", () => {
  it("Should return array of copies.", async () => {
    let res = await request(app).get("/api/copies/getAllCopies");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get Copy by id", () => {
  test("Should return the object of copy of the given id.", async () => {
    let res = await request(app).get("/api/copies/getCopyById/1");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(1);
    expect(Object.keys(res.body).length).toBe(5);
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).get("/api/copies/getCopyById/tuwy");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/copies/getCopyById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a copy record", () => {
  it("should return a success message when a record is created", async () => {
    let res = await request(app).post("/api/copies/createCopy").send({
      status: "Available",
      bookId: 2,
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Copy is created successfully.");
  });

  it("should return an error if required field is missing", async () => {
    let res = await request(app).post("/api/copies/createCopy").send({
      status: "Available",
      // bookId : 3
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if any field's type is not correct.", async () => {
    let res = await request(app).post("/api/copies/createCopy").send({
      status: 23,
      bookId: 2,
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
});

describe("Update copy details for the given id", () => {
  it("should return a success message when a record is updated", async () => {
    let res = await request(app).patch("/api/copies/updateCopy/1").send({
      status: "Checked out",
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Book copy details updated successfully",
    });
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).patch("/api/copies/updateCopy/webfw").send({
      status: "Checked out",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist in records.", async () => {
    let res = await request(app).patch("/api/copies/updateCopy/100").send({
      status: "Checked out",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any Copy of this id exists.");
  });
});

describe("Delete the copy record for given id", () => {
  it("Should return error as loan table and transaction table have copyId as foreign key.", async () => {
    let res = await request(app).delete("/api/copies/deleteCopy/1");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).delete("/api/copies/deleteCopy/uyt");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).delete("/api/copies/deleteCopy/100");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe(
      "There isn't any Book copy of this id exists."
    );
  });
});
