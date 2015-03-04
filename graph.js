function main() {
  var targets = document.getElementsByClassName("graphPopup");
  var i;
	
  for (i = 0; i < targets.length; i++) {
    targets[i].addEventListener("mouseenter", displayGraph, false);
    targets[i].addEventListener("mouseenter", handleOutline, false);
  }
}

function displayGraph() {
  var graphElem = document.getElementById("graph");
  var graphSrc = this.getAttribute("data-graph");

  graphElem.src = graphSrc;
}

function handleOutline() {
  var prevElem = document.getElementsByClassName("graphActive")[0];
  prevElem.classList.remove("graphActive");
  this.classList.add("graphActive");
}

window.onload = main;
