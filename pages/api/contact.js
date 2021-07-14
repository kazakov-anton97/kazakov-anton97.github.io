// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {SENDGRID_API_KEY} from '../../config'
const sgMail = require('@sendgrid/mail')
const { body, validationResult } = require('express-validator/check')
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
    await body('name','').isLength({ min: 2,max: 200 }).run(req);
    await body('email','').isEmail().run(req);
    await body('message','').isLength({min:5,max:1000}).run(req);
    await body('website','').isLength({min:0,max:0}).run(req);
    let errors = validationCheck(req)
    if(!isEmpty(errors)){
        res.json({status:"error"})
    } else {
        sgMail.setApiKey(SENDGRID_API_KEY)
        var html = ""
        html += `<p>Name: ${req.body.name}</p>`
        html += `<p>Email: ${req.body.email}</p>`
        html += `<p>Message: ${req.body.message}</p>`
        const msg = {
            to: 'info@opposablethumbs.in',
            // to: 'jogi@creativebyte.io',
            from: 'info@opposablethumbs.in',
            subject: 'Enquiry from the website',
            html
        }
        sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
            res.json({status:"success"})
        })
        .catch((error) => {
            console.error(error)
            res.json({status:"error"})
        })
    }
}
