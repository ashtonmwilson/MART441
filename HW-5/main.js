// Building the deck of memory cards
// all code was read and re written from Mart-441 website unless otherwise noted.
var deckTags = ["image1","image2","image3","image4"];
// making a blank image variable
var blankCardpath = "filler.jpg";
// actual images
var actualImages = new Array();

function printBlanks()
{
  // call on random
  createRandomCardArray();
  // Loop
  for(var i = 0; i < imageTags.lenth; i++)
  {
    document.getElementById(deckTags[i]).src= blankCardpath;
  }

}

function createRandomCardArray()
{
  //Building the card bank(array)
  var actualCardpath= ["imgs/Face.png","imgs/Pattern12.png","imgs/Pattern23.png","imgs/Pattern34.png","imgs/Pattern16.png","imgs/Pattern19.png","imgs/Pattern3.png", "imgs/Pattern15.png","imgs/Pattern20.png","imgs/fingerprint.png"];
  //limit images to appearing twice
  var count = [0,0];
  while(actualImages.length < 4)
  {
      // get random junberbetween 0 and total(4)
      var randomNumber = Math.floor(Math.random() * actualImagePath.length)
      // create an if statement that says if the total number added is less than 2, add image to array
      if(count[randomNumber] < 2)
      {
        actualImages.push(actualImagePath[randomNumber]);
        count[randomNumber] = count[randomNumber] + 1;
      }
  }
}
function flipCard(number)
{
  document.getElementById(imageTags[number]).src= actualImages[number];
  //uses number pressed to change images....
}
