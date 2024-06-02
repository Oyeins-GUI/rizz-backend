const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const PORT = process.env.PORT || 5000;

const app = express();

config();

app.use(
   cors({
      origin: "https://rizz-tau.vercel.app",
   })
);

app.get("/", (req, res) => {
   res.send("Hello, rizz");
});

app.get("/api", async (req, res) => {
   const response = await fetch(
      "https://satscreener-api.up.railway.app/api/v1/stx20/rizz",
      {
         method: "GET",
         headers: {
            "api-key": process.env.RIZZ_API_KEY,
         },
      }
   );
   const data = await response.json();

   res.status(200).json(data);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
