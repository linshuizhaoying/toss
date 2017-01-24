function fail(thing) {
  throw new Error(thing)
}

function warn(thing) {
	console.log(["WARNING:", thing].join(' '))
}

function note(thing) {
	console.log(["Note:", thing].join(' '))
}

function parseAge(age) {
	if (!_.isString(age)) fail("Expecting a string")

	var a 
  note("Attempting to parse an age");
  a = parseInt(age,10)

  if(_.isNaN(a)) {
  	warn(["Could note parse age:", age].join(''))
  	a = 0
  }

  return a
}

/*

parseAge("linshui")
Note: Attempting to parse an age
WARNING: Could note parse age:linshui
0
 */