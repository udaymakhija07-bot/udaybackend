console.log("🔥 FILE STARTED 🔥")

const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log("➡️ REQUEST:", req.method, req.url)
  next()
})

app.get('/', (req, res) => {
  console.log("✅ ROOT ROUTE")
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  console.log("✅ LOGIN ROUTE")
  res.send('<h1>please login in chai aur code</h1>')
})

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`)
})
