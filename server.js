require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.USER_NAME}, wilder in ${process.env.USER_CITY}, and I love ${process.env.USER_LANGUAGE}`);

