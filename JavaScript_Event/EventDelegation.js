
// attach event listeners to the elements

// document.addEventListener('DOMContentLoaded', function(){
// 	let app = document.getElementById('todo-app');
// 	let items = app.getElementsByClassName('item');

// 	// attach event listner to ach item
// 	for (let item of items){
// 		item.addEventListener('click', function(){
// 			alert("You clicked on item: " + item.innerHTML);
// 		});
// 	}
// })

// While this does technically work, the problem is that you’re attaching 
// an event listener to every single item individually. 
// This is fine for 4 elements, 
// but what if someone adds 10,000 items 
// (they may have a lot of things to do) to their todo list? 
// Then your function will create 10,000 separate event listeners 
// and attach each of them to the DOM. This isn’t very efficient.


// Here’s the code for event delegation

document.addEventListener('DOMContentLoaded', function(){
	let app = document.getElementById('todo-app');

	// attach event listeners to whole containnner

	app.addEventListener('click',function(e){
		if(e.target && e.target.nodeName === 'LI'){
			let item = e.target;
			// console.log(item.nodeName);
			alert('You clicked on item: ' + item.innerHTML)
		}
	});
});