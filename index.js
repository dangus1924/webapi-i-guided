const express = require('express');// this is the common import way for node libaray

const server = express();// here is where we call the imported express

//What happens on a GET request 
//reques handler
// the '/' is the route of the request 
server.get('/', (req, res) => { //req and res is the two hommies think of req as anything incoming and res as anything outgoing.
        res.send('Hello World') //notice we use res because we are sending a response back to the user that request information from the server. 
})











//this is another way to write this both way work fine
// const host = '120.0.0.1';
// const port = 8080
// server.listed(host, port () => {
//      console.log(`server is now runing on ${host}:${port}`)
//})
server.listen(8080, () => {
    console.log('Server is running on port 8080')
});// this should be the last step in this code