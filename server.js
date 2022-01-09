const express = require('express');
const app = express();
app.listen(8000,function(){
    console.log("server is running")
})


//Mocking data
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users',function(req, res){
    res.json({
            sucess: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
    })
})
//Mocking end