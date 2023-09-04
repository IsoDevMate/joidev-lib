// Load app dependencies
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/routing');

// Initialize the application
const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

// Configure app
app.set('port', port);

// Load app middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Load the routes
app.use('/api', routes);

// create validation rules using Joi to validate an email, phone number, and birthday for a request to create a new user. 
app.post('/test', async(req,res,next)=>{
    const Joi =require('joi')
 //take data from the request body 
    const data = req.body
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
        birthday: Joi.date().iso().required(),
      })
      
    //This code takes the data and validates it against the schema.
    try {
        const value = await Joi.validateAsync(data, schema);
      
        // Generate a random id
        const id = Math.ceil(Math.random() * 999999);
      
        res.status(200).json({
          status: 'success',
          message: 'User created successfully',
          data: Object.assign({ id }, value),
        });
      } catch (err) {
        // Handle any validation errors here
        res.status(422).json({
          status: 'error',
          message: 'Invalid request data',
          data: data, // user data returned if there's an error
        });
      }
      
})

// Establish http server connection
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

