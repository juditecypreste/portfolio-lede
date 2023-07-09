document.addEventListener("DOMContentLoaded", function() {
    // Select the image element
    var imagem = d3.select("#g-image-grid-Prancheta_1");
  
    // Select the box and text elements
    var box = d3.selectAll("#box, #box-1, #box-2, #box-3, #box-4, #box-5, #box-6, #box-7");
    var texto = d3.selectAll(".g-txt");
  
    // Set transition properties for the box and text
    var transicaoBox = box.style("opacity", 0); // Set initial opacity to 0
    var transicaoTexto = texto.style("opacity", 0); // Set initial opacity to 0
  
    // Add a click event to the image
    imagem.on("click", function() {
      // Start the box transition
      transicaoBox.transition()
        .duration(1000) // Set the duration of the box transition in milliseconds
        .style("opacity", 1); // Set the final opacity to 1
  
      // When the box transition ends, start the text transition
      transicaoTexto.transition()
        .duration(500) // Set the duration of the text transition in milliseconds
        .style("opacity", 1); // Set the final opacity to 1
    });
});
