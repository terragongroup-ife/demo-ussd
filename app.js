const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

require('dotenv').config()

var PORT = process.env.PORT;

var app = express()
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) =>{
 return  res.send('This is an ussd app that conducts a simple survey');
})

app.post('/', (req, res) =>{
    let{sessionId, serviceCode, msisdn, text } = req.body;

    if (text == ''){
        let response = 'CON  do you prefer rice to beans \n 1. yes \n 2. no '
       
        res.send(response);
    }
    else if(text == '1'){
        let response = 'CON which one do you prefer?  \n 1. white rice and stew \n 2. jollof rice  \n  3. fried rice'
        res.send(response)
    }
    else if(text == '1*1'){
        let response = 'CON do you like it with plantain, beans and chicken? \n 1. none of the above\n 2. plantain and chicken \n 3. beans and chicken\n 4. plantain beans and chicken'
        res.send(response)
    }

    else if(text == '1*1*1' || '1*1*2' || '1*1*3' || '1*1*4'){
        let response = 'END thank you for your input.'
        res.send(response)
    }
    else if(text == '1*2'){
        let response = 'CON do you like it with coleslaw and chicken? \n 1. none of the above \n2. coleslaw and chicken    \n 3. just chicken '
        
        res.send(response)        
    }

    else if(text == '1*2*1' || '1*2*2' || '1*2*3'){
        let response = 'END thank you for your input.'
        res.send(response)
    }
    else if(text == '1*3'){
        let response = 'CON do you like it with coleslaw, jollof rice and chicken?'
        '1. none of the above \n 2. coleslaw and chicken \n 3. just chicken \n 4. jollof rice and chicken \n 5. all of the above'
    
        res.send(response)        
    }

    else if(text == '1*3*1' || '1*3*2' || '1*3*3' || '1*3*4' || '1*3*5'){
        let response = ' END thank you for your input.'
        res.send(response)
    }
    else if(text == '2'){
      let response = ' CON What do you like your beans with?\n 1. plantain \n 2. bread'
         res.send(response);
    }
    else if( text == '2 *1' || '2*2'){
        let response = ' END thank you for your input.'
        res.send(response)
        }else{
            res.status(400).send('Bad request!');
        }


})
app.listen(PORT , () =>{
    console.log("server running on port " + PORT);
})