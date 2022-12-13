// Select the h1 element and store it in a variable named heading.
var heading = document.querySelector("h1");

// Check the typeof heading and log it.
console.log(typeof(heading));
// Change the color of heading to black.

heading.style.color = "black"
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll

let allHrs = document.querySelectorAll("hr");
//console.log(allHrs)
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray
Array.from converts an array kind of data into array so we can use methods like map, reduce
HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array(...allHrs);

// Set the border of the all the hr elements to "1px solid tomato"

allHrsArray.map(ele =>{
  ele.style.border = "1px solid tomato"
});
// Change the background of all the hr to "antiquewhite" using for of loop.

for(let hr of allHrsArray){
  hr.style.background = "antiquewhite"
}

// Change the 'border-radius' of all the hr to "5px" using array.
allHrsArray.map(ele => {
  ele.style.borderRadius = "5px"
})
// Change the alignment of the heading(h1) to center.
heading.style.textAlign = "center"
// Change the font size of the heading to 3rem.
heading.style.fontSize = "3rem"
// Change the border of hr with class 'image' to `2px solid purple`.
// allHrsArray.map(ele => {
//   let imageHr = document.querySelectorAll(".image")
//   console.log(imageHr)
//   imageHr.forEach(ele =>
//     ele.style.border = "2px solid purple"
//   )
// })

let imageHr = document.querySelectorAll(".image");
console.log(imageHr);
imageHr.forEach((ele) => (ele.style.border = "2px solid purple"));
// Hide the box number 17 (last box).

let hideBox17 = (document.querySelector(".box.seventeen").style.display =
  "none");

// Change the border of all the hr element from solid to dashed type

allHrsArray.forEach(ele => {
  ele.style.border = "2px dashed purple"
})

// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p")
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

para.innerText =
  "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";
  

// Remove all the elements from box 1

let removeElementFrom = document.querySelector(".one")
removeElementFrom.innerHTML = ''
// Replace all the elements inside box 1 with the para (you created above)
let replace = document.querySelector(".box.one")
replace.append(para)
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16
  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild
  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild
  - Focus on the difference between element and node
*/
let box16 = document.querySelector(".box.sixteen")
let box16ParantNode = box16.parentNode
//console.log(box16ParantNode);
let childNodes = box16.childNodes;
//console.log(childNodes)
let previousSibling = box16.previousSibling;
//console.log(previousSibling)\
let nextSibling = box16.nextSibling;
// console.log(nextSibling)
let firstChildbox16= box16.firstChild;
// console.log(firstChildbox16)
let lastChildbox16 = box16.lastChild;
// console.log(lastChildbox16)
let previousElementSiblingbox16 = box16.previousElementSibling;
// console.log(previousElementSiblingbox16)
let nextElementSiblingbox16 = box16.nextElementSibling;
// console.log(nextElementSiblingbox16)
let firstElementChildbox16 = box16.firstElementChild;
// console.log(firstElementChildbox16)
let lastElementChildbox16 = box16.lastElementChild;
// console.log(lastElementChildbox16)




// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let box2Element = document.querySelector(".box.two");
box2Element.append("Append inserts as last child")

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let box3Element = document.querySelector(".box.three");
box3Element.prepend("Prepend inserts as first child");
// Change the border of box 4 to '1px solid black'
let box4Element = document.querySelector(".box.four");
box4Element.style.border = '1px solid black'
// Change the border radius of box 5 to 10px.
let box5Element = document.querySelector(".box.five");
box5Element.style.borderRadius = '10px'
// Change the text color of box 6 to black.
let box6Element = document.querySelector(".box.six");
box6Element.style.color = "black"
// Change the font size of the para inside box 1 to 0.8rem.
replace.style.fontSize = "0.8rem"
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let alternateElement = document.querySelectorAll(".box:nth-child(odd)")
alternateElement.forEach(ele => {
ele.style.background = "aliceblue";
})
// add a class named "awesome-box" to the box 6 using classList property of DOM element.
box6Element.classList.add("awesome-box");
// Using the toggle classList property toggle the class `awesome-box` from box 2
box2Element.classList.toggle("awesome-box");
// Using the remove classList proeprty remove the class `awesome-box` from box 4
box4Element.classList.remove("awesome-box");
// Change the background of the body to bisque
let bodyElement = document.querySelector("body");
bodyElement.style.background = "bisque";
// Create a button and store it in a variable named 'btn'
let btn = document.createElement ("button")
// textContent of the button should be 'Click Me'
btn.textContent = "Click Me"
// Change the background of the btn to 'oldlace'
btn.style.background = "oldlace";
// Change the font size of the btn to 1rem
btn.style.fontSize = "1rem"
// Change the border of the btn to '1px solid black'
btn.style.border = "1px solid black";
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = "0.5rem 1rem";
// Append the btn in box number 9
let box9Element = document.querySelector(".box:nth-child(9)");
box9Element.appendChild(btn)
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm = document.createElement("img");
imgElm.src =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
// Select the box 7 using class seven
let box7Element = document.querySelector(".box:nth-child(7)")
// console.log(box7Element)

// Remove all the elements form box seven
box7Element.innerHTML = ""
// Append the imgElm to the box no 7
box7Element.appendChild(imgElm)
// Change the width and height of the image to `100%`
imgElm.style.width = "100%"
imgElm.style.height = "100%"
// Select the box 5 using class five
let box5Elm = document.querySelector(".box:nth-child(5)")
// Create an input element
let input = document.createElement("input")
// Change the placeholder property of the input element to "Enter you email!"
input.placeholder = "Enter you email!"
// Append the input element to the box 5 you selected above
box5Elm.appendChild(input)
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let anchorFirst = document.createElement("a")
let anchorSecond = document.createElement("a")
anchorFirst.innerText = "AltCampus";
anchorSecond.innerText = "Google";
// Change the href property of the anchor elements to `https://www.mountblue.io/` and `https://google.com`
anchorFirst.href = "https://www.mountblue.io/";
anchorSecond.href = "https://google.com";
// Append both the elements to box 5 you selected above.
box5Elm.appendChild(anchorFirst);
box5Elm.appendChild(anchorSecond)