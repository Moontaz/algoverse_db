const express = require("express");
const app = express();
const gameRoutes = require("./routes/game");

app.use(express.json());
app.use("/api", gameRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running at http://localhost:" + process.env.PORT);
});
