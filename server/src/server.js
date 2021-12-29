import express from 'express'
import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(express.json())

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
db.data = db.data || { courses: [] }

const { courses } = db.data

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`)
})