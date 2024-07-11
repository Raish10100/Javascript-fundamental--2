//Revesion
//Revesion
/*
const students = [
    {
      name : "Mithun",
      marks : 25
    },
    {
      name : "Rahul",
      marks : 95
    },
    {
      name : "Rohit",
      marks : 85
    },
  ]
function check(studentName){
  let found = false;
students.forEach( (student) => {
  if(student.name === studentName){
    found = true;
    return  student.marks > 90 ? console.log(`Congratulation ${student.name}! you have cleared the exam`) : console.log(`Sorry ${student.name}! you have not cleared the exam`);
  }
});
  if(!found){
    
  console.log(studentName + " are not a student of this class");
  }
}

check("Rohit");
check("someone")
*/

// ------------------------------------------------------------------------------------------------------
// const students = [
//   {
//     name : "Mithun",
//     marks : 25
//   },
//   {
//     name : "Rahul",
//     marks : 95
//   },
//   {
//     name : "Rohit",
//     marks : 85
//   },
// ]

// function checkResults(studentName) {
//   // let found = false; // Flag variable to track if a match is found
//   for (const item of students) {
//       if (item.name === studentName) {
//           // found = true; // Set flag to true if a match is found
//           if (item.marks > 90) {
//               console.log(`Congratulations ${item.name}! You have cleared the exam.`);
//           } else {
//               console.log(`Sorry ${item.name}! You have not cleared the exam.`);
//           }
//       }
//   }
//   // If no match found, print "Invalid User!"
//   if(!found){
//       console.log("Invalid User!");
//   }
// }

// checkResults("Rohit"); // Test with an existing student name
// checkResults("Someone"); // Test with a non-existing student name


// ------------------------------------------------------------------------------------------------------
//======================================================================================================


 
 

// -----------------------------------------------------------------------------------------------------------------

/*
const students = [

  {

    name: "Mithun",

    marks: 95,

  },

  {

    name: "Prabir",

    marks: 75,

  },

  {

    name: "Alka",

    marks: 92,

  },

  {

    name: "Shivam",

    marks: 70,

  },

  {

    name: "Farman",

    marks: 99,

  },

];



const checkResults = (name) => {

  for (let student of students) {

    if (student.name === name) {

      return student.marks > 90

        ? console.log(

           ` Congratulations ${student.name}! You have cleared the exam.`

          )

        : console.log(`Sorry ! You have not cleared the exam.`);

    }

  }

  console.log("Invalid User !!!");

};



checkResults("Mithun");

// OUTPUT: Congratulations Mithun! You have cleared the exam.



checkResults("Farman");

// OUTPUT: Sorry ! You ha…

*/



// ----------------------------------------------------------------------------------------------------------------------------------------------------------
//In this solution after experiment get knowlege
/*
Yes, you're correct. In JavaScript, the behavior of `return` statements inside `for...of` loops and `forEach` loops is different:

1. **`return` in `for...of` loop**:
   - In a `for...of` loop, the `return` statement exits the entire function in which the loop is contained. This means that when you use `return` inside a `for...of` loop, it will not only exit the current iteration but also terminate the enclosing function immediately.
   - This behavior is consistent with how `return` works in other control structures like `for` loops and `while` loops.

2. **`return` in `forEach` loop**:
   - In a `forEach` loop, the `return` statement only exits the current iteration of the loop. It does not terminate the enclosing function.
   - After the `return` statement is encountered in a `forEach` loop, the loop continues with the next iteration (if any) or completes if it's the last iteration.
   - Because of this behavior, `return` statements inside `forEach` loops are often used for early termination of an iteration, but they do not terminate the entire function.

Here's an example illustrating the difference:

```javascript
function exampleForOf() {
    const array = [1, 2, 3];
    for (const item of array) {
        if (item === 2) {
            return; // Exits the entire function when item is 2
        }
        console.log(item);
    }
}

function exampleForEach() {
    const array = [1, 2, 3];
    array.forEach(item => {
        if (item === 2) {
            return; // Exits only the current iteration, not the entire function
        }
        console.log(item);
    });
}

exampleForOf(); // Output: 1
exampleForEach(); // Output: 1 3
```

In `exampleForOf()`, the function terminates immediately when `item` is `2`, so only `1` is printed. In `exampleForEach()`, `2` is skipped but the function continues executing and prints `1` and `3`.
*/








// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
 