# chlorophyll-map
Indicator map for sea chlorophyll concentrations, with interactive rollover areas

#Process
##Generating the SVG
To generate the initial SVG use the QGIS plugin `SimpleSvg`. This plugin will convert your current viewport to SVG so you will need to ensure you have the correct extent displayed.
##Tweaking the SVG
In order for the JavaScript events to trigger you will need to add a class of `graphPopup` to each SVG group you would like a graph to popup for on mouseover, and also give them an attribute of `data-graph` with the relative location of the graph. You will also likely need to remote the group with an id of `qgisviewbox` since this only draws a box around the svg.
##Fitting the SVG to the map
To get the SVG to line up with the map you will need to go through a process of trial and error to size and position it correctly. This process is aided if you temporarily change the SVG `stroke` attribute to a color with a high contrast to the map and use a browser's element editor to live edit the css. Additionally to ensure responsiveness you will need to use percentages for the `width`, `top` and `left` attributes rather than absolute pixels. 