// Hoisting
console.log(getRandomInt(2, 50));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Anonymous function
const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// One line return
const getRandomIntArrowFunctionWithoutReturn = (min, max) => 
    Math.floor(Math.random() * (max + 1 - min) + min);

// The anonymous functions need to be called after they're initialized.

    console.log(getRandomIntArrowFunction(2, 50));

    console.log(getRandomIntAnonymousFunction(1, 3));

    console.log(getRandomIntArrowFunctionWithoutReturn(1,9));

    // Callback function is genericAction and the argument to be used in that function is name.
    function genericActionPerformer(genericAction, name) {
        // do things
        return genericAction(name);
    }

    const jump = (name) => `${name} is jumping`;
    
    // Result is Lasse is jumping

    console.log(genericActionPerformer(jump, "Lasse"));

    const run = (name) => `${name} is running`;
    // Desired result "Jonathan is running"

    console.log(genericActionPerformer(run, "Jonathan"));

    // Define run in a different way than line 41

    function run2(name) {
        return `${name} is running`
    };

    console.log(genericActionPerformer(run2, "Patrick"));

    // Desired result is "Daniel is sleeping"
    // Create a sleep callback and get the desired result
    // In a single statement

    console.log(genericActionPerformer((name) => `${name} is sleeping`, "Daniel"));