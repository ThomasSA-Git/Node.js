//"use strict";

//totalGlobalVariable = "Never EVER!!! do this!!";

//console.log(totalGlobalVariable);

// Global scope when not declaring the type of variable

var globalVariable = "Also NEVER!!! do this!!";

// var is also global

function anotherScope() {
  // function scope
}

{
    // block scope
}

{
    console.log("Hello! I'm in a block scope");
}

/* {
    var someVariable = true;
    {
        var someVariable = false;
    }
    console.log(someVariable);
} */

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}

//const arguments = 123;

// Key word arguments not allowed when running strict mode

// In the example below you can may never use var. Don't EVER use var.
for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);    
}

// Const must be initialized and can't be redeclared. If const is an object the properties can be changed.
const isThisConstant = [];
isThisConstant.push(1, 2, 3);
console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange = true;
console.log(anotherConstant);

// Let is in the same scope as const. But let can unlike const be redeclared.
// 