// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {SENDGRID_API_KEY} from '../../config'
const sgMail = require('@sendgrid/mail')
export default (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  sgMail.setApiKey(SENDGRID_API_KEY)
  var html = `<p>Message: ${req.body.message}</p>`
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
