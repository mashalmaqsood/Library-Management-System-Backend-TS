import app from "./index";
const port = process.env.PORT;

app.listen(port, async () => {
  console.log(
    `Library management system backend(server) listening at http://localhost:${port}`
  );
  console.log("Database connected!");
});
