JAVASCRIPT FUDAMENTALS
==

Creating a fucntion
---
simple javascript function to add numbers
```
function add(a,b){
    var total = a + b;
    console.log(total) // prints to console 
    document.write(total) // prints on hmtl page
}
add();
```

Arrays []
---

```

movies = ['BoogyMan', 'Avengers', 'Last Man Standing']

array.pop => Removes the last element of the array
array.push => The push() method adds a new element to an array (at the end):
toString => Converts elements in the arra to string 
join() => The join() method also joins all array elements into a string
movies[0] = "Kiwi";     // Changes the first element of movies to "Kiwi"
```

loops
---

```

var movies = ['BoogyMan', 'Avengers', 'Last Man Standing']

movies.forEach(function(movie)){
    alert(movie);
}

```

javascript objects 
---
*  An object is a collection of properties, and a property is an association between a name (or      key) and a value. A property's value can be a function, in which case the property is known as    a method

* let => used when defining local variables.When defined out of a block it becomes a global variable.
``` 

let myName = () => {
    let userName = 'james';
    return userName;
}

console.log(myName());

console.log(myName); // error undefined

```

* when queried outside its block the resulting error is ``` undefined ```

