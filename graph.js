function main() {
	var targets = document.getElementsByClassName("graphPopup");
	var i;
	
	for (i = 0; i < targets.length; i++) {
		targets[i].addEventListener("mouseenter", displayGraph, false);
	}
}

function displayGraph() {
     var graphElem = document.getElementById("graph");
	 var graphSrc = this.getAttribute("data-graph");
	 
	 graphElem.src = graphSrc;
}

window.onload = main;