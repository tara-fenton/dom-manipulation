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
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");

  for (var i = 0;  i < lands.length; i++) {
    // create an article element for each land
    var land = document.createElement("article");
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
var shire = body.querySelectorAll("article")[0];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = document.createElement("ul");

  for (var i = 0; i < hobbits.length; i++) {
    var hobbitItem = document.createElement("li");
    hobbitItem.innerHTML = hobbits[i];
    // give each hobbit a class of hobbit
    hobbitItem.className = "hobbit";
    shire.appendChild(hobbitItem);
  }

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";

  // add the ring as a child of Frodo
  var frodo = body.querySelectorAll("li")[0]
  frodo.appendChild(ring)
}

keepItSecretKeepItSafe();
// Part 4

var rivendell = body.querySelectorAll("article")[1];

function makeBuddies() {
  // create an aside tag
  var buddie = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  for (var i = 0; i < buddies.length; i++) {
    var buddieItem = document.createElement("li");
    buddieItem.innerHTML = buddies[i];
    buddie.appendChild(buddieItem);
  }
  // insert your aside as a child element of rivendell
  rivendell.appendChild(buddie)
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = body.querySelectorAll("article")[1].querySelectorAll("li")[3];
  aragorn.innerHTML = "Aragorn";
  console.log(aragorn);
}
//*[@id="middle-earth"]/article[2]/aside/li[4]
beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called theFellowship within rivendell
  // add each hobbit and buddy one at a time to theFellowship
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
