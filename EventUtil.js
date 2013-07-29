var EventUtil = {

	addHandler: function( element, type, handler ) {
		if (element.addEventListener) {
			element.addEventListener( type, handler );
		} else if (element.attachEvent) {
			element.attachEvent( "on" + type, handler );
		} else {
			element["on" + type] = handler;
		}
	},

	getEvent: function(event) {
		return event ? event : window.event;
	},

	getTarget: function(e) {
		return e.target || e.srcElement;
	},

	preventDefault: function(e) {
		e.preventDefault ? e.preventDefault : e.returnValue = false;
	},

	removeHandler: function( element, type, handler ) {
		if (element.removeEventListener) {
			element.removeEventListener( type, handler );
		} else if (element.detachEvent) {
			element.detachEvent( "on" + type, handler );
		} else {
			element["on" + type] = null;
		}
	},

	stopPropagation: function(e) {
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
	}

}