
 //image switcher code
 
 var myImage = document.querySelector('img');
 
 myImage.onclick = function() {
 	var mySrc = myImage.getAttribute('src');
 	if (mySrc == 'images/header.jpg') {
 		myImage.setAttribute('src', 'images/chamonix.jpg');
 	} else {
 		myImage.setAttribute('src', 'images/header.jpg');
 	}
 }
 
 // personalized welcome message code
 
 var myButton = document.querySelector('button'); 
 var myHeading = document.querySelector('h3');
 
 function setUserName() {
 	var myName = prompt('Please enter your name');
 	localStorage.setItem('name', myName); /* like an array*/
 	myHeading.textContent = 'Hey there ' + myName + '! Where are you in the world?';
 }
 
 if (!localStorage.getItem('name')) {
 	setUserName();
 } else {
 	var storedName = localStorage.getItem('name');
 	myHeading.textContent = 'Hey there ' + storedName + '! Where are you in the world?';	
 }
 
 myButton.onclick = function() {
 	setUserName();
 }