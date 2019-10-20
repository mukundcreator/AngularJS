var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjValue"
    },
    walk: function () {
        console.log("Walking..!");
    }
};

var child=Object.create(parent);

console.log("child.value: ",child.value);
console.log("child.obj.objValue: ",child.obj.objValue);
console.log("parent.value: ",parent.value);
console.log("parent.obj.objValue: ",parent.obj.objValue);
console.log("parent: ",parent);
console.log("child: ",child);


child.value="childValue";
child.obj.objValue="childObjValue";

console.log("**Changed - child.value: ",child.value);
console.log("**Changed - child.obj.objValue: ",child.obj.objValue);
console.log("parent.value: ",parent.value);
console.log("parent.obj.objValue: ",parent.obj.objValue);
console.log("parent: ",parent);
console.log("child: ",child);

console.log("child.objj === parent.obj ? ",child.obj===parent.obj);


var grandChild=Object.create(child);
console.log("Grandchild: ",grandChild);
grandChild.walk();

console.log("grandChild.objj === parent.obj ? ",grandChild.obj===parent.obj);

function Dog(name){
    this.name=name;
    console.log("This is: ",this);
}

var myDog=new Dog("YOLO");
console.log("myDog: ",myDog );

Dog("EDITH");


