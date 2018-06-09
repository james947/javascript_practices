function sayHello(){
    var question = prompt("What is your name");
    //document.write(" Hello " + question + ' have an awesome day');
    document.write(`Hello ${question} have an awesome day`); // template leteral
}

sayHello();


function add(a,b){
    var total = a + b;
    document.write("The sum is " + total);

}

// add(5,6);

function sum(){
    let a = 0;
    var number = prompt(" Enter number 1");
    var number_2 = prompt(" Enter number 2")
    var total = number + number_2 ; 
    document.write(total)
}

// sum();

// loops in js

var movies = ['BoogyMan', 'Avengers', 'Last Man Standing']

// using arrow functions
// movies.forEach(movie => alert(movie) );

// var james = [1,2,3,4,5,6,7,8,9,10]

// james.forEach(i => document.write(i) );

// much simpler loop

// for (var movie of movies){
//     console.log(movie);
//     document.write(movie)

// }

// objects => 

// var movie = {
//     Title:'WonderWoman',
//     Director:'Patty jenkins',
//     Producer:'Deborah Synder',
//     Rating:'4'
// };

// alert(movie.Rating);

// function movie(){}

// arrow functions
let vida = () => {
    let newMovie = ' trinidad ';
    return newMovie;
    };

console.log(vida());
// arrow function simplified
let areaRadius = r => 3.14 * r * r; //if the parameter passed is less than 2 no need to inclued ()

console.log(areaRadius(7))


// spread operator
// makes it easier to pass array elements into a function

let addNumbers = (a,b,c) =>{
    console.log(a + b + c);

}
arr = [2,4,5]
addNumbers(...arr);