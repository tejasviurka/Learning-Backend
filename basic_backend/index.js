// require module syntax
const express = require('express')
const app = express()
const port = 3000

// app ek get request karege, / ka jo home route hai waha pr listen karo,
// agar waha koi bhi req ate hai toh response send krdenge hello 
app.get('/',(req, res) => {
    res.send('Hello')
})

app.get('/twitter', (req, res) =>{
    res.send('tejasvi')
})

app.get('/login', (req, res) =>{
    res.send('please login')
})
// use listen method
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})