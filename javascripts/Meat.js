console.log("Meat.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var meatPrices = {"turkey": 1.00, "ham": 0.75, "vegan": 1.35};

    // Augment the original object with another method
    maker.addMeat = function(event) {

        return maker;
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);
