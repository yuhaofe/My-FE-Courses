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

app.get('/courses/tag/:tag', (req, res) => {
  const coursesByTag = courses.filter(c => c.tags.find(tag => tag.toLowerCase() === req.params.tag.toLowerCase()))
  res.send(coursesByTag.sort((a, b) => b.id - a.id))
})

app.get('/courses/search/', (req, res) => {
  res.send(courses.sort((a, b) => b.id - a.id))
})

app.get('/courses/search/:search', (req, res) => {
  const coursesBySearch = courses.filter(c => c.title.toLowerCase().includes(req.params.search.toLowerCase()))
  res.send(coursesBySearch.sort((a, b) => b.id - a.id))
})

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`)
})