// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){ 
    console.log(`DB CONNECTED`);
})(); // iffe with semicolon stop then you can create more than 1 iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('wasim')
