import app from "./index";
import db from './db/models'
const port = process.env.PORT;

app.listen(port, async () => {
  console.log(
    `Library management system backend(server) listening at http://localhost:${port}`
  );
  await db.syncModel();
  console.log("Database connected!");
});
