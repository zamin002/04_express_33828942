// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get('/contact', (req, res) => res.send('<h1>Email: zamin002@gold.ac.uk</h1>'));

router.get('/date', (req, res) => {

    // Add date here so it updates whenever page refreshes
    const date = new Date();

    // Used backtick for date instead of quote since its not a plain string
    res.send(`<h1>${date}</h1>`)});

// Use name as parameter for req
router.get('/welcome/:name', (req, res) => {
    const {name} = req.params;
    res.send(`<h1>Welcome, ${name} </h1>`)});



// chain route with two chained handlers
router.get('/chain', 

    // 1st handler
    (req, res, next) => {
        console.log("1st handler ran"); // Runs in terminal btw NOT in dev console
        res.write('<h1>2nd handler says hello</h1>');

        // Pass control to the next handler
        next(); 
    },
    // 2nd handler
    (req, res) => {
        console.log("2nd handler ran"); // Also ran in terminal
        res.write('<h1>1st handler says goodbye</h1>');

        // End response
        res.end();
    }
);
    
// Export the router object so index.js can access it
module.exports = router;
