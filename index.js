const express = require('express');
const app = express();
const { spawn } = require("child_process");
const port = 3191;

app.get("/", async function response(req, res) {
  try {
    const python = spawn('python', ['index.py']);
    python.stdout.on('data', (data) => {
      const response = data.toString();
      res.send(response);
    })
  }
  catch (err) {
    console.log(err)
    res.send("file not found")
  }
})

app.listen(port, () => {
  console.log("server started");
})

