import * as express from "express";
const app = express();
import * as route from "./app/routes/index";
const port = process.env.PORT || 10000;

route(app);
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
