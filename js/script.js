var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//Log out the groceries
console.log(groceries.length);

/*Create a variable called deleteDuplicates for a function expression with list as a parameter.
Inside the function body, declare a variable called cleanList with an empty array as a value. 
This empty array will hold the unique items from the list that you passed to the function. 
For example, if you pass your groceries array to the deleteDuplicates function, given that “coffee” 
appears twice in the groceries array, this new array will only have the first instance of coffee and will not hold the second instance.
Use for...of to loop through the list array that is passed to the function, 
referring to each element as item.

Inside the loop, use an if statement to check if the cleanList array doesn’t already include the item. 

Hint: Add a not operator (!) before cleanList in the condition.

If the cleanList array doesn’t include the item, add an element to the end of the array.

Return the cleanList.

*/

var deleteDuplicates = function(list){
  var cleanList = [];
  
  for (var item of list){
    if(!cleanList.includes(item)){
      cleanList.push(item);
    }
  }

  return cleanList;
};


//Create a variable called newGroceries and assign 
//it to a call to the deleteDuplicates function. Pass the groceries array as an argument.
var newGroceries = deleteDuplicates(groceries);

//Log out newGroceries
console.log(newGroceries.length);

//Loop through the newGroceries array to find the element and the index of each element. 
//Hint: When choosing how to loop through your array, think about which tool will help you get the element 
//AND the index of the element.

newGroceries.forEach(function(item, index){
  console.log(`${index+1}. ${item}`);
});



