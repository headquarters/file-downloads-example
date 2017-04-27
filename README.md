# File Downloads Example (Node.js/Browser JS)

Downloading files is a confusing topic because there are so many ways to handle it 
in the browser. This repo shows a few methods for downloading a file using
server-side methods and client-side methods. 

There are 3 methods shown:
- Link to the file you want to download with an anchor's `href` attribute
- Link to an Express route that will use `res.download` to serve the file
- Capture the click event on the client and initiate a `fetch` to the server to perform the download

## Setup
`npm install`

## Run the example
`npm start`

View the sample app at localhost:5000

### Notes
`fetch` is not supported in [all major browsers yet](http://caniuse.com/#search=fetch)
So this method will not work in IE11 (it fails silently in this example).

The first two methods are verified to work in Chrome 57, Firefox 53, Safari 10.1, and IE11. 
Chrome and Safari do not prompt the user to download the file, while Firefox and Safari do. 