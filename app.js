import express from 'express'
const app = express()

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  res.status(500).send('broken')
})
// get the port from env variable
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  if (process.env.CRASH === 'true') throw new Error('Crash for testing')
  console.log(`server started on port ${PORT}`)
})
