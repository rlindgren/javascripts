by = function( property, order ) {

	order = typeof order !== 'undefined' ? order : 'ASC';

	return function( item1, item2 ) {
		
		var value1 = typeof item1[property] === 'function' ? item1[property]() : item1[property];
		var value2 = typeof item2[property] === 'function' ? item2[property]() : item2[property];

		if ( value1 < value2 ) {
			return ( order === "ASC" || order === "asc" ) ? -1 : 1;
		}
		else if ( value2 < value1 ) {
			return ( order === "ASC" || order === "asc" ) ? 1 : -1;
		}
		else {
			return 0;
		}

	}

}