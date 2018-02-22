console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
   // create a section element with an ID of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');

  for (var i = 0;  i < lands.length; i++) {
    // create an article element for each land
    var land = document.createElement('article');
    // inside each article element include an h1 with the name of the land
    land.innerHTML = "<h1>" + lands[i] + "</h1>";
    // append the land article element to the middle-earth section element
    middleEarth.appendChild(land);
  }
  // append middle-earth to your document body
  body.appendChild(middleEarth);


}

makeMiddleEarth();


// Part 2
var shire = body.querySelectorAll('article')[0];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = document.createElement('ul');
  shire.appendChild(hobbitList);
  for (var i = 0; i < hobbits.length; i++) {
    var hobbitItem = document.createElement('li');
    hobbitItem.innerHTML = hobbits[i];
    // give each hobbit a class of hobbit
    hobbitItem.className = "hobbit";
    hobbitList.appendChild(hobbitItem);
  }

}

makeHobbits();
var ring = document.createElement('div');
// Part 3
var frodo = body.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'

  ring.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";

  // add the ring as a child of Frodo

  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();
// Part 4

var rivendell = body.querySelectorAll('article')[1];

function makeBuddies() {
  // create an aside tag
  var buddie = document.createElement('aside');
  var buddyList = document.createElement('ul');
  // attach an unordered list of the 'buddies' in the aside
  for (var i = 0; i < buddies.length; i++) {
    var buddieItem = document.createElement('li');
    buddieItem.innerHTML = buddies[i];
    buddyList.appendChild(buddieItem);
  }
  // insert your aside as a child element of rivendell
  buddie.appendChild(buddyList);
  rivendell.appendChild(buddie);
}

makeBuddies();
// Part 5

var aragorn = rivendell.querySelectorAll('li')[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  aragorn.innerHTML = "Aragorn";
}

//*[@id="middle-earth"]/article[2]/aside/li[4]
beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsAssemble = shire.querySelector('ul');
  rivendell.appendChild(hobbitsAssemble);
}

leaveTheShire();

// Part 7

var fellowship = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called theFellowship within rivendell
  var theFellowship = document.createElement('div');
  // add each hobbit and buddy one at a time to theFellowship
  for (var i = 0; i < fellowship.length; i++) {
    theFellowship.appendChild(fellowship[i]);
    //alert(fellowship[i].textContent + " has joined the party")
  }
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  //#middle-earth > article:nth-child(2) > div
  var gandalf = rivendell.querySelector('li');
  gandalf.innerHTML = "Gandalf the White";
  // apply style to the element
  gandalf.style = "color: red; background: white; border: 1px solid grey;"
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9
var boromir = fellowship[4];
console.log(boromir);
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  //alert("Boromir's been killed by the Uruk-hai!")
  // put a linethrough on boromir's name
  boromir.style.textDecoration = 'linethrough';
  // Remove Boromir from the Fellowship
  boromir.parentNode.removeChild(boromir);
}

hornOfGondor();
// Part 10
var sam = fellowship[6];
var mordor = body.querySelectorAll('article')[2];
var doom = document.createElement('div');
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam)
  // add a div with an id of 'mount-doom' to Mordor

  doom.setAttribute('id', 'mount-doom');
  mordor.appendChild(doom);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div')
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  doom.appendChild(gollum);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  doom.removeChild(gollum);

  // Move all the hobbits back to the shire
  var hobbits = body.querySelectorAll('.hobbit');
  for (var i = 0; i < hobbits.length; i++) {
    shire.appendChild(hobbits[i]);
  }
  // remove all the baddies from the document
  var baddies = rivendell.querySelectorAll('ul');
  //rivendell.removeChild(baddies);
  console.log("baddies "+baddies);

}
thereAndBackAgain();
