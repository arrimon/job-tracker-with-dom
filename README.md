"## Programming Hero Assignment 4 job-tracker-with-dom" 

1. GitHub Repository Link: https://github.com/arrimon/job-tracker-with-dom.git
2. Live Site Link:  https://arrimon.github.io/job-tracker-with-dom/

**Technology Stack:**
- HTML
- CSS (Tailwind/DaisyUI)
- JavaScript (Vanilla)

**Question Answer**
## getElementById
What it does: Grabs one element using its unique ID.

Return: A single element.

Example: document.getElementById('login-btn')

## getElementsByClassName
What it does: Grabs all elements that have a specific Class.

Return: An HTMLCollection (a list of elements).

Example: document.getElementsByClassName('nav-item')

## querySelector
What it does: Grabs the first element that matches any CSS selector (.class, ##id, or tag).

Return: A single element.

Example: document.querySelector('.card .btn')

## querySelectorAll
What it does: Grabs every element that matches the CSS selector.

Return: A NodeList (a list you can easily loop through using .forEach).

Example: document.querySelectorAll('.delete-btn')


## How do you create and insert a new element into the DOM?
// 1. Create
const newTag = document.createElement('p');

// 2. Add Content
newTag.innerText = "Hello, I am new here!";

// 3. Insert
document.getElementById('container').appendChild(newTag);

## What is Event Bubbling? And how does it work?
Event bubbling is a way that events (like clicks) move through the DOM. When you trigger an event on an element, it first runs on that element, then “bubbles up” to its parent, then to the grandparent, and so on, all the way to the <html> element.

i. For example, if you click a button inside a div:

ii. The button’s click handler runs.

iii. Then the div’s click handler runs.

iv. Then the body’s click handler runs, and so on.

It’s useful because you can attach a single handler on a parent instead of adding one to every child element.


### What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you attach one listener to their parent. Then, inside that listener, you check which child triggered the event using event.target
i. only one event listener for many elements.


## What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() → Stops the default browser action for an event.

Example: Stops a link from navigating, or a form from submitting.

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault(); // link won’t open
});

stopPropagation() → Stops the event from bubbling (or capturing) through the DOM.

Example: Prevents a click on a button from triggering the parent div’s click handler.

document.querySelector('button').addEventListener('click', (e) => {
  e.stopPropagation(); // parent div click won’t run
});