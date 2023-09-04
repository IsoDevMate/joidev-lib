## Creating a school Portal 

## BELOW ARE SOME OF THE ENDPOINTS 

/people: add new students and teachers
/auth/edit: set login credentials for teachers
/fees/pay: make fee payments for students

 ## The morgan middleware and the body-parser

 These middlewares fetch and parse the body of the current HTTP request for application/json & application/x-www-form-urlencoded requests, and make them available in the req.body of the request’s route handling middleware.

 ## lets say admin adds teacher data this is the req.body of the request

 {
    "type": "TEACHER",
    "firstname": "Glad",
    "lastname": "Chinda"
}