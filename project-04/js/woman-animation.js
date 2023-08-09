// annotation: #hand
d3.select("#circulo-1").classed('hidden', true);
d3.select("#circulo-2").classed('hidden', true);
d3.select("#circulo-3").classed('hidden', true);
d3.select("#circulo-4").classed('hidden', true);
d3.select("#circulo-5").classed('hidden', true);
d3.select("#circulo-6").classed('hidden', true);
d3.select("#circulo-7").classed('hidden', true);

d3.select("#step-zero-woman").on('stepin', function(e) {
    console.log("Reached step zero");
});
// Step One
d3.select("#step-one-woman").on('stepin', function(e) {
console.log("Reached step one");
// Make changes for step one
hideNote();
d3.select("#circulo-1").classed('hidden', false);
d3.select("#circulo-2").classed('hidden', false);
d3.select("#circulo-3").classed('hidden', false);
d3.select("#circulo-4").classed('hidden', false);
d3.select("#circulo-5").classed('hidden', false);
d3.select("#circulo-6").classed('hidden', false);
d3.select("#circulo-7").classed('hidden', false);
});

d3.select("#step-one-woman").on('stepout', function(e) {
console.log("Left step one");
// Undo changes for step one
hideNote();
});
