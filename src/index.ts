import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

const PORT: number = 5000

app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`)
})