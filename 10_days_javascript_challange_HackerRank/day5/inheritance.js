// Objective

// In this challenge, we practice implementing inheritance and use JavaScript 
// prototypes to add a new method to an existing prototype. 
// Check out the attached Classes tutorial to refresh what we've learned about 
// these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. 
// Perform the following tasks:

// 1. Add an area method to Rectangle's prototype.
// 2. Create a Square class that satisfies the following:
// 3. It is a subclass of Rectangle.
// 4. It contains a constructor and no other methods.
// 5. It can use the Rectangle class' area method to print the area of a Square object.

class Rectangle{
	constructor(w,h){
		this.w = w;
		this.h = h;
	}
}

Rectangle.prototype.area = function(){
	return (this.w * this.h);
}

class Square extends Rectangle{
	constructor(s){
		super(s,s);
		// this.w = s;
		// this,h = s;
	}
}
