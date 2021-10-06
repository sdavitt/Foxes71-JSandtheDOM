/*
JavaScript and the HTML DOM
*/

let main_title = document.getElementsByTagName('h1');
console.log(main_title);
console.log(main_title[0]);
console.log(main_title[0].className);
main_title[0].innerHTML = 'The Greenland shark is the longest living vertebrate in the world.';

// access our color-button in JS
let color_button = document.getElementById('color-button');
console.log(color_button);

// we need to come to up with a process to run when the button is pressed
let color_change = () => {
    let e = document.getElementsByTagName('h1')[0];
    if (e.className == '') {
        e.className = 'color-change'
    }
    else if (e.className == 'color-change'){
        e.className = 'color-change-two'
    }
    else {
        e.className = ''
    }
}

// we need to 'listen' for the button press to know when to throw our process into the event loop
// event listeners are attached to different HTML elements to tell javascript when to do things
color_button.addEventListener('click', color_change);


// what if I want to create an HTML element in my JS? Can I do that? Absolutely.
let new_button = document.createElement('button');
let to_be_displayed = document.createElement('p');
to_be_displayed.className = 'color-change';
to_be_displayed.hidden = true;

// add some text to our button
new_button.innerHTML = 'Click for more Greenland shark facts'

// add this new button to our page
document.body.append(new_button);
document.body.append(to_be_displayed);

// create a process for what happens when that button is pressed
let sharkfacts = () => {
    if (to_be_displayed.hidden){
        to_be_displayed.innerHTML = 'Most Greenland sharks are blind. Due to their slow swimming speed, their eyes are succeptible to a specific species of parasite.';
        new_button.innerHTML = 'Hide SharkFact';
        to_be_displayed.hidden = false;
    } else {
        new_button.innerHTML = 'Click for more Greenland shark facts';
        to_be_displayed.hidden = true;
    }
}

// event listener for our button and process
new_button.addEventListener('click', sharkfacts);

/*
Interacting with an HTML Form
*/
// get access to my form
let sharkfactform = document.getElementById('testForm');
console.log(sharkfactform);

sharkfactform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    let sharkname = event.path[0][0].value;
    console.log(sharkname);
    let sharkfact = event.path[0][1].value;
    console.log(sharkfact);
    let qsharkname = document.querySelector('#shark-name').value;
    let qsharkfact = document.querySelector('#shark-fact').value;
    console.log(`Query selector data: ${qsharkname} ${qsharkfact}`);
})
