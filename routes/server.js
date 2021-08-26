const express = require("express");
const path = require("path");
// const createDbApiRoutes = require("./dbApiRoutes")

const app = express();
const port = process.env.PORT || 3000;

app.use(
  express.static(path.join(__dirname, "./public"), { extensions: ["html"] })
);

// createDbApiRoutes(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});