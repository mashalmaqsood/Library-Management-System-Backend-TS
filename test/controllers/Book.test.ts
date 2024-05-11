import request from "supertest";
import models from "../../src/db/models"
import app from "../../src/index"

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all books", () => {
  it("Should return array of books.", async () => {
    let res = await request(app).get("/api/books/getAllBooks");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get Book by id", () => {
  test("Should return the object of book of the given id.", async () => {
    let res = await request(app).get("/api/books/getBookById/2");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(2);
    expect(Object.keys(res.body).length).toBe(9);
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).get("/api/books/getBookById/3sfv");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/books/getBookById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a book record", () => {
  it("should return a success message when a record is created", async () => {
    let res = await request(app).post("/api/books/createBook").send({
      title: "Clean Code",
      author: "Robert C. Martin",
      ISBN: "978-0132350884",
      genre: "Software Engineering",
      publishedYear: 2008,
      publisher: "Prentice Hall",
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Book created successfully.");
  });

  it("should return an error if required field is missing", async () => {
    let res = await request(app).post("/api/books/createBook").send({
      title: "no",
      author: "Robert C. Martin",
      ISBN: "978-0132350884",
      genre: "Software Engineering",
      // publishedYear: 2008,
      publisher: "Prentice Hall",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
  it("Should return error if any field's type is not correct.", async () => {
    let res = await request(app).post("/api/books/createBook").send({
      title: 123,
      author: "Robert C. Martin",
      ISBN: "978-0132350884",
      genre: "Software Engineering",
      publishedYear: 2008,
      publisher: "Prentice Hall",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });
});

describe("Update book details for the given id", () => {
  it("should return a success message when a record is updated", async () => {
    let res = await request(app).patch("/api/books/updateBook/2").send({
      title: "Clean code guide",
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Book details updated successfully" });
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).patch("/api/books/updateBook/webfw").send({
      title: "Clean code guide",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist in records.", async () => {
    let res = await request(app).patch("/api/books/updateBook/100").send({
      title: "Clean code guide",
    });
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any Book of this id exists.");
  });
});

describe("Delete the book record for given id", () => {
  it("Should return error as copy table has bookId as foreign key '.", async () => {
    let res = await request(app).delete("/api/books/deleteBook/1");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });

  it("Should return error if the given id is not integer.", async () => {
    let res = await request(app).delete("/api/books/deleteBook/uyt");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
  });

  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).delete("/api/books/deleteBook/100");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("There isn't any Book of this id exists.");
  });
});
