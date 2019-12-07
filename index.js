const express = require('express');// this is the common import way for node libaray

const server = express();



// const  = '120.0.0.1';
// const port = 8080
server.listen(8080, () => {
    console.log('Server is running on port 8080')
});// this should be the last step in this code