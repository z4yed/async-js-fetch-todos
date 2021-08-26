setTimeout(()=> {
    console.log(`Second Line`);
}, 0);

setTimeout(()=> {
    console.log(`First Line`);
}); // if no time is provided, it will consider 0

setTimeout(()=> {
    console.log(`Third Line`);
}, 10);

console.log(`Fourth Line`);

setTimeout(()=> {
    console.log(`Fourth Line`);
}, 1000);