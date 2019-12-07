//Libraries
const express = require('express');// this is the common import way for node libaray

// Other files
const db = require('./data/hubs-model.js')// because we want to work with this data base we need to import it 

//Global objects
const server = express();// here is where we call the imported express

//middleware
server.use(express.json());
// don't overthink this middleware there will be an entire lesson on this, but you essentially needs this for the req.body

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
        // console.log('hubs', hubs) // console log will show in the node terminal because we are working in the backend not the frontend
        res.send(hubs);
    })
    .catch(err => {
        //we use status code 500 because that is the default which means catch all errors
    //     500 Internal Server Error:
    // The server has encountered a situation it doesn't know how to handle.
        res.status(500).json({
            err: err
        })
    })
});

// POST request
//you can check this by using postman, insomina or create a frontend app
server.post('/hubs', (req, res) => {
    const newHub = req.body; //this is done because we are looking for what the frontend user is sending, remember req is what the user is sending.
                                //working with the frontend we send a object/data to the post req.body is looking for that data in the body.
    db.add(newHub) 
    .then(hub => {
        res.status(201).json(hub);
    })
    .catch(err => {
        res.status(500).json({
          err: err,
          message: 'failed to create new hub'  
        })
        
    })
})

//delete
server.delete('/hubs/:id', (req, res) => {
    const { id } = req.params;    
    db.remove(id)
    .then(deletedHub => {

    });
        
    .catch(err => {
        res.status(500).json({
            err: err,
            message: 'failed to delete hub'
        });
    });
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