// Loop methods
// forEach, map, filter, find, sort

// Map returns new list and forEach just iterates the existing list.

const trolls = [
    { name: "anonymous", trollLevel: 9 },
    { name: "kroolleboolle", trollLevel: 22 },
    { name: "krooleline", trollLevel: 27 }
];

// task add 5 to troll level to all the trolls

const upgradedTrolls = trolls.map(troll => {
    troll.trollLevel += 5;
    return troll;
});

console.log(upgradedTrolls);

const doubleUpgradedTrolls = trolls.map((troll) => ({
    name: troll.name,
    trollLevel: troll.trollLevel + 5
}));

console.log(doubleUpgradedTrolls);

// task 2: Create a list of trolls where the troll level is an odd number

/* const oddTrolls = trolls.map((troll) => {
    if(troll.trollLevel % 2 === 0){
        troll.trollLevel += 1;
    }
    return troll;
}); */


const oddTrolls = doubleUpgradedTrolls.filter((troll) => troll.trollLevel % 2 === 1);

console.log(oddTrolls);

// Arguments for loop
// Brevity
// Less errors (indexOutOfBounds, = missing etc.)