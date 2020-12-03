const url = process.argv[2]
const file = process.argv[3]
const fs = require('fs')


const fetcher = (url, file) => {
  const request = require('request');
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(file, body, (err) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
    })
  });
};

// const fetcher = ()

fetcher(url, file);