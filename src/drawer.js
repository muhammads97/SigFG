var addNodeOnClickLabel = null;
var addEdgeOnClickWeight = null;

var nodes = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
];
var edges = [
    { from: '0', to: '1', gain: 1 },
    { from: '1', to: '2', gain: 1 },
    { from: '2', to: '3', gain: 1 },
    { from: '3', to: '4', gain: 1 },
    { from: '4', to: '5', gain: 1 },
    { from: '5', to: '6', gain: 1 },
    { from: '6', to: '7', gain: 1 },
    { from: '7', to: '8', gain: 1 },
    { from: '3', to: '6', gain: 1 },
    { from: '5', to: '7', gain: 1 },
    { from: '5', to: '4', gain: -1 },
    { from: '7', to: '5', gain: -1 },
    { from: '6', to: '2', gain: -1 },
    { from: '7', to: '1', gain: -1 }
];

var selectedNode = null;
var deleteEdge = false;
var deleteNode = false;

var container = document.getElementById('network');
var data = {nodes: nodes, edges: edges};
var width = 1000;
var height = 500;
var options = {
    width: width + 'px',
	height: height + 'px',
   	nodes: {
   	    shape: 'dot',
   	    size: 10,
   	},
   	edges: {
   	    smooth: {
   	    	enabled:true,
   	    	type: 'dynamic',
   	    	roundness: 1.0,

   	    },
   	},
   	physics: {
   		enabled: true,
   		// barnesHut: {
   		// 	avoidOverlap: 1,
   		// },
   		stabalization: {
   			enabled: true,
   			onlyDynamicEdges: true,

   		},
   	},
   	interaction: {
   	    dragNodes: true,// do not allow dragging nodes
   	    zoomView: true, // do not allow zooming
   	    dragView: false  // do not allow dragging
   	}
};
var network = new vis.Network(container, data, options);
network.moveTo({
    position: {x: 0, y: 0},
   	offset: {x: -width/2, y: -height/2},
   	scale: 1,
});

network.on("click", function (params) {
    if(addNodeOnClickLabel == null) {
    	if(addEdgeOnClickWeight == null) return;
		if(selectedNode == null){
			selectedNode = params.nodes[0];
		} else {
			destinationNode = network.getNodeAt({x: params.pointer.DOM.x, y: params.pointer.DOM.y});
  			edges.add({
  				from: selectedNode,
  				to: destinationNode, 
  				label: addEdgeOnClickWeight, 
  				weight: parseInt(addEdgeOnClickWeight),
  				arrows:'to',
  			});
  			selectedNode = null;
  			addEdgeOnClickWeight = null;
		}
		return;
    }
    nodes.add({
    	id: addNodeOnClickLabel, 
    	label: addNodeOnClickLabel, 
    	x: params.pointer.DOM.x, 
    	y: params.pointer.DOM.y,
    	physics: false,
    });
    addNodeOnClickLabel = null;
});

network.on("selectNode", function (params) {
	if(deleteNode){
		network.deleteSelected();
		deleteNode = false;
	}
});

network.on("selectEdge", function (params) {
    if(deleteEdge){
    	network.deleteSelected();
    	deleteEdge = false;
    }
});

// network.on("deselectNode", function (params) {
//     selectedNode = null;
// });

// network.on("doubleClick", function (params) {
// 	if(selectedNode == null){
// 		selectedNode = network.getNodeAt({x: params.pointer.DOM.x, y: params.pointer.DOM.y});
// 	} else {
// 		destinationNode = network.getNodeAt({x: params.pointer.DOM.x, y: params.pointer.DOM.y});
//   		edges.add({from: selectedNode, to: destinationNode, label: "1", weight: 1});
//   		selectedNode = null;
// 	}
    
// });

function addNodeBtn() {
<<<<<<< HEAD
	addNodeOnClickLabel = prompt("Node Name: ");
}

function addEdgeBtn() {
	addEdgeOnClickWeight = prompt("Edge Gain");
}

function deleteEdgeBtn(){
	deleteEdge = true;
}

function deleteNodeBtn(){
	deleteNode = true;
}

function solveBtn(){
	inputNode = document.getElementById("inNode").value;
	outputNode = document.getElementById("outNode").value;
	solve(inputNode, outputNode);
=======
    addNodeOnClick = true;
}

function addEdgeBtn() {
    addEdgeSelected = true;
>>>>>>> f9f35cd86a665998dca658a477fc773cf656e2ea
}