const express = require('express')

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World")
})

console.log(`Listening on http://localhost:${PORT}`)
app.listen(PORT)
