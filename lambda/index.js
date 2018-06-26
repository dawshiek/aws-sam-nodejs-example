'use strict';
module.exports.handler = (event, context, callback) => {

    console.log("Received request");
    let response = {
        statusCode: 200,
        body: "Hello World",
    };
    callback(null, response);
  };