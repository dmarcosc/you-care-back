import express from 'express'

const app = express()
app.use(express.json())

const PORT = 300

app.get('/ping', (_reg, res) => {
    console.log('someone pinged here !!')
    res.send('ping')
})

app.listen(PORT, () =>{
    console.log(`Server runing on port ${PORT}`)
})