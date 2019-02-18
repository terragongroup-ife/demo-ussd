const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('.config/config.json');

import {} from 'dotenv/config';

const PORT = process.env.PORT;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) =>{
 return  res.send(config.responses.baseUrlResponse);
});

app.post('/', (req, res) =>{
    let{sessionId, serviceCode, msisdn, text } = req.body;

    if (text == ''){
       res.send(config.responses.noReqString);
    }
    else if(text == '1'){
        let response = 'CON which one do you prefer?  \n 1. white rice and stew \n 2. jollof rice  \n  3. fried rice'
        res.send(config.responses.one);
    }
    else if(text == '1*1'){
        let response = 'CON do you like it with plantain, beans and chicken? \n 1. none of the above\n 2. plantain and chicken \n 3. beans and chicken\n 4. plantain beans and chicken'
        res.send(config.responses.one*one);
    }

    else if(text == '1*1*1' || '1*1*2' || '1*1*3' || '1*1*4'){
    
        res.send(config.responses.one*two*one);
    }
    else if(text == '1*2'){
        let response = 'CON do you like it with coleslaw and chicken? \n 1. none of the above \n2. coleslaw and chicken    \n 3. just chicken '
        
        res.send(config.responses.one*two);       
    }

    else if(text == '1*2*1' || '1*2*2' || '1*2*3'){
        
        res.send(config.responses.one*two*one);
    }
    else if(text == '1*3'){
    
        res.send(config.responses.one*three);        
    }

    else if(text == '1*3*1' || '1*3*2' || '1*3*3' || '1*3*4' || '1*3*5'){
       
        res.send(config.responses.one*two*one);
    }
    else if(text == '2'){
         res.send(config.responses.two);
    }
    else if( text == '2 *1' || '2*2'){
       
        res.send(config.responses.one*two*one);
        }else{
            res.status(400).send('Bad request!');
        }


})
app.listen(PORT , () =>{
    console.log("server running on port ${PORT}");
})