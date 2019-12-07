//Libraries
const express = require('express');// this is the common import way for node libaray

// Other files
const db = require('./data/hubs-model.js')// because we want to work with this data base we need to import it 

//Global objects
const server = express();// here is where we call the imported express

//What happens on a GET request 
//reques handler
// the '/' is the route of the request 
server.get('/', (req, res) => { //req and res is the two hommies think of req as anything incoming and res as anything outgoing.
        //Let's talk about whats happening in the backend when sending a res look at 
        //server wants to know 
        //what is the datatype?
            //-data is what tyoe of data we are sending back, because we are use express it simplified everthing for us. 
            //A good example would be <h1>Hello World</h1> inside the res.send
        //what is my status code?
            //- the default res code that in here is actual status code 200 because we see that it is sent successfully 
            //you can find this in your network tab.
        //what am I sending back?
            //we are sending back hello world
        res.send('Hello World'); //notice we use res because we are sending a response back to the user that request information from the server. 
});

// GET /hubs
server.get('/hubs', (req, res) => {
    db.find() //here we are getting the hubs from the database
    //we do this because we are working with promises
    .then(hubs => {
        res.send(hubs);
    })
    .catch(err => {
        res.status(500).json({
            err: err
        })
    })
});

// notice this new route, when the user goes to localhost:8080/now
server.get('/now', (req, res) => {
    //we are using a Date object this is not specific to the backend
    const now = new Date().toISOString(); // this is a simple date you can refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    res.send(now); // just like above we are sending something back because we are using the res.
});


//()







//this is another way to write this both way work fine
// const host = '120.0.0.1';
// const port = 8080
// server.listed(host, port () => {
//      console.log(`server is now runing on ${host}:${port}`)
//})
server.listen(8080, () => {
    console.log('Server is running on port 8080')
});// this should be the last step in this code