
// 5. Write a program in javascript for the following:-
// Declare an  array
var empName = [];

// Add items to the array
empName.push("Ajay");
empName.push("samar");
empName.push("Neha");
console.log("Array after adding items: ", empName);

// Delete an item from the array
empName.splice(1, 1);
console.log("Array after deleting an item: ", empName);

// Add an item at a particular index
empName.splice(1, 0, "sunaina");
console.log("Array after adding an item at index 1: ", empName);

// Delete an item from a particular index
empName.splice(2, 1);
console.log("Array after deleting an item from index 2: ", empName);