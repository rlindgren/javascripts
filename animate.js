var animate = function( node, o, dur ) {
	node = document.querySelector(node);
	styleKeys = [];

	for (var style in o) {
		if (o.hasOwnProperty(style)) {
			styleKeys.append(style);
		}
	}

	key = styleKeys[0];
	end = o['end'] || o[key];
	
	if (node.length > 1) { 
		node = node[1];
	}

	if (o[key] < 0)

	while (end > o[key]) {
		node.style[key] = o[key];
	} 

	}

	node.style[o]
};