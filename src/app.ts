import express from 'express'

const app = express()

app.use(express.json())
console.log('online >  http://localhost:1024/')

export default app
