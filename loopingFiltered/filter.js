var numbeArray=[1,2,3,4,5,6,7,8,9,10];
console.log("Number Array: "+numbeArray);

function valueAbove5(value){
    return value>5;
}

var filteredNumberArray=numbeArray.filter(valueAbove5);
console.log("Filtered Number Array: "+filteredNumberArray);

var shoppingList1 = ["Rice", "Meat - Dinner", "Apple - Dinner", "Milk", "Water", "Soap", "Beer - Dinner"];
console.log("Shopping List: "+shoppingList1);

var searchValue="Dinner";
function containsFilter(value){
    return value.indexOf(searchValue)!==-1;
}

var searchedShoppingList=shoppingList1.filter(containsFilter);
console.log("Searched Shopping List",searchedShoppingList);
