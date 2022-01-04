import express from 'express'
import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(express.json())
app.use((req, res, next) => setTimeout(next, 500))

const adapter = new JSONFile('db.json')
const db = new Low(adapter)
await db.read()
db.data = db.data || { courses: [] }

const { courses } = db.data

app.get('/courses', (req, res) => {
  res.send(courses.sort((a, b) => b.id - a.id))
})

app.get('/course/:id', (req, res) => {
  const course = courses.find(c => c.id === req.params.id) 
  res.send(course)
})

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`)
})