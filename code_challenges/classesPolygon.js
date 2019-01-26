
// Task

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of 
// the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.

// Note: The perimeter method must be lowercase and spelled correctly.

// Input Format
// There is no input for this challenge.

// Output Format
// The perimeter method must return the polygon's perimeter using the side 
// length array passed to the constructor.

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */


// Answer

class Polygon{
    constructor(heights) {
        let poly_parameters = 0;
        for (let index in heights) {
            poly_parameters += heights[index];
        }
        this.my_perimeter = poly_parameters;
    }

    perimeter() {
        return this.my_perimeter;
    }
}