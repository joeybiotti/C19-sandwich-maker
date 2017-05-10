console.log("Condiments.js");

var SandwichMaker = (function(maker) {
    var condimentPrices = {"Mustard": 0.65, "Mayo": 0.75};
    console.log("ccondimentPrices", condimentPrices);
    maker.addCondiments = function() {
        return maker;
    };
})(SandwichMaker)
