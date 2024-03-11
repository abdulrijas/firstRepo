// for(let i=0;i<5;i++){
// console.log(i);
// }

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/',function(request,response){
    // console.log(request);
    // response.status(200).send('Home Page');
    const obj={
        "page":"Home Page"
    }
    response.status(200).json(obj);
})

app.post('/validate-user',function(request,response){
    // response.send('validated');
    const {username, password} =  request.body
    if(username=="abcd" && password=="1234"){
    console.log(request.body)
    response.status(200).json({
        status : "success",
        message : "Valid-user"
    })
    }
    else{
        response.status(401).json({
            status : "failed",
            message : "invalid-user"
        })
    }
})

app.get('/java',function(request,response){
    // response.send('Java Page');
    response.status(200).json({
        "page":"Java Page"
    });
})

app.listen(8000, function(){
    console.log("Listening");
})