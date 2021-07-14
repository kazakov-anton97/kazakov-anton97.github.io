// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {SENDGRID_API_KEY} from '../../config'
const { body,validationResult } = require('express-validator/check')
const _ = require('lodash')
const isEmpty = require('lodash/isEmpty')
function validationCheck(req){
    const errors_array = validationResult(req).array();
    let errors = {}
    _.map(errors_array,(val)=>{
        if(!errors[val.param])
            errors[val.param]=[]
        errors[val.param].push(val.msg)
    });
    return errors  
}
export default async (req, res) => {
    try{    
        await body('email','').isEmail().run(req);
        let errors = validationCheck(req)
        if(isEmpty(errors)){
            let result = await fetch(`https://api.sendgrid.com/v3/marketing/contacts`, {
                method: 'PUT', 
                headers: {
                    "authorization": `Bearer ${SENDGRID_API_KEY}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "list_ids": [
                        "0b6b3ecb-7ad4-4ff1-974c-2af77e9c4a92"
                    ],
                    "contacts": [
                        {
                        "email": req.body.email
                        }
                    ]
                }) 
            })
            if(result.status==202){
                res.json({status:"success"})
                console.log('success 202')
            }
            else{
                console.log('error 400')
                res.json({status:"error"})
            }
        } else {
            console.log('validation error')
            res.json({status:"error"})
        }
    } catch(err){
        res.json({status:"error"})
    }
}
