import request from "supertest";
import models from "../../src/db/models"
import app from "../../src/index"

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all members", () => {
  it("Should return array of members.", async () => {
    let res = await request(app).get("/api/member/getAllMembers");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get member by id", () => {
  test("Should return the object of book of the given id.", async () => {
    let res = await request(app).get("/api/member/getMemberById/1");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(1);
    expect(Object.keys(res.body).length).toBe(7);
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).get("/api/member/getMemberById/3sfv");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/member/getMemberById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a member record", () => {
  it("should return a success message when a record is created", async () => {
    let res = await request(app).post("/api/member/createMember").send({
      name: "hassan",
      email: "hassan@gmail.com",
      phone: "0321590345",
      address: "A1 Lahore"
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Member created successfully.");
  });

  it("should return an error if required field is missing", async () => {
    let res = await request(app).post("/api/member/createMember").send({
        name: "hassan",
        // email: "hassan@gmail.com",
        phone: "0321590345",
        address: "A1 Lahore",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
  
  it("Should return error if any field's type is not correct.", async () => {
    let res = await request(app).post("/api/member/createMember").send({
        name: "hassan",
        email: 123,
        phone: "0321590345",
        address: "A1 Lahore",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
});

describe("Update member details for the given id", () => {
  it("should return a success message when a record is updated", async () => {
    let res = await request(app).patch("/api/member/updateMember/1").send({
        name : "Mashal"
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Member details updated successfully" });
  });
  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).patch("/api/member/updateMember/webfw").send({
        name : "Mashal"
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
    it("Should return error if id doesn't exist in records.", async () => {
    let res = await request(app).patch("/api/member/updateMember/100").send({
        name : "Mashal"
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any member of this id exists.");
  });
})

describe("Delete the member record for given id", () => {
    it("Should return error if the given id is not integer.", async () => {
      let res = await request(app).delete("/api/member/deleteMember/uyt");
      expect(res.status).toBe(400);
      expect(res.error).toEqual(expect.any(Error));
      expect(res.body.message).toBe("Invalid Input Data");
    });

    it("Should return error if id doesn't exist.", async () => {
      let res = await request(app).delete("/api/member/deleteMember/100");
      expect(res.status).toBe(404);
      expect(res.error).toEqual(expect.any(Error));
      expect(res.body.message).toBe("There isn't any member of this id exists.");
    });
  });
