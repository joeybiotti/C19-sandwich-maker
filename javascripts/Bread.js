console.log("bread.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var breadPrices = {"white": 1.00, "whole wheat": 1.75, "no bread": 3.00};

    // Augment the original object with another method
    maker.addBread = function(event) {

        return maker;
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);
