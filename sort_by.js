function by( property, order ) {

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



function getAge() {
    birthDate = this.birthday;
    today = new Date(Date.now());
    console.log(birthDate)

    var years = ( today.getFullYear() - birthDate.getFullYear() );

    if (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate() || 
    		today.getMonth() < birthDate.getMonth()) {
        years--;
    }
    this._age = years;
    return years
}

var list = [
	{
		first_name: "Ryan", 
		last_name: "Lindgren", 									/*	# hard-attribute 'last_name' is (more or less) fixed, and other conditions may depend on this condition (ie. if person.gender is 'male' the wife's last name could be computed as a pointer to this 'last_name') */
		age: getAge,											/*	# pseudo-attribute 'age' has a value that depends upon other conditions, namely, the current date. */
		_age: 0,
		birthday: new Date('July 6, 1983'), 
		height: 75, 
		weight: 175
	},

	{
		first_name: "Brandon", 
		last_name: "Lindgren", 
		age: getAge,
		_age: 0, 
		birthday: new Date('May 27, 1985'), 
		height: 72, 
		weight: 180
	},

	{
		first_name: "Jonathan", 
		last_name: "Bostick", 
		age: getAge, 
		_age: 0,
		birthday: new Date('May 17, 1983'), 
		height: 73, 
		weight: 185
	}]

list.sort(by('first_name'))

