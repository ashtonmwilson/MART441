// console.log("testing\""\\n\"." as anew line" ); ya... if you can explain how to see this actually work, that would be great... I cannot get /n/ to work at all... there is also no use of it in any of the interactive shels on the course site.
//console.log("testing math"+"half of 100is ${100/2}");

function getChoice1()
  {
    var myChoice = document.getElementById("choice").value;
    var myStory = document.getElementById("story");
    if(myChoice === "Moon")
    {
      document.getElementById("bg").src = "imgs/earth.jpg";
      document.getElementById("choice").style.display = "none";
      document.getElementById("inputbutton").style.display = "none";
      document.getElementById("choice2").style.display = "block";
      document.getElementById("inputbutton2").style.display = "block";

      myStory.innerHTML = "wow,as the kids say: we out here."+"<br>the view from the moon sure makes earth look good,<br> we are lucky to call it home."+"<br>Which are you more thankful for?: Air or Water?";
    }

    else if(myChoice === "Mars")
    {
      document.getElementById("bg").src = "imgs/mars.jpg";
      document.getElementById("choice").style.display = "none";
      document.getElementById("inputbutton").style.display = "none";
      document.getElementById("choice3").style.display = "block";
      document.getElementById("inputbutton3").style.display = "block";

      myStory.innerHTML = "Ol Dusty!"+" <br> Here on mars the 'boys' eat candy bars."+" <br> Snickers or Resses?";
    }
    else if(myChoice === "Jupiter")
    {
      document.getElementById("bg").src = "imgs/jupiter.png";
      document.getElementById("choice").style.display = "block";
      document.getElementById("inputbutton").style.display = "block";

      myStory.innerHTML = "As we approached Jupiter, our sensors tell us it is uninhabitable...<br> Please choose another destination.";
    }
    else if(myChoice === "Earth")
    {
      document.getElementById("bg").src = "imgs/moon.jpg";
      document.getElementById("choice").style.display = "none";
      document.getElementById("inputbutton").style.display = "none";
      document.getElementById("choice4").style.display = "block";
      document.getElementById("inputbutton4").style.display = "block";

      myStory.innerHTML = "I wonder... does it taste like cheese?"+"<br>Gouda or Edam?";
    }
    else
    {
      myStory.innerHTML = "This space ship does not serve that location."+"<br> (hint: CapiTalIzation MatteRs.)";

    }

    console.log(myChoice);
  }
function getChoice2()
{
  var elements = document.getElementById("choice2").value;
  var myStory = document.getElementById("story");
  if(elements === "Air")
  {
    document.getElementById("choice2").style.display = "none";
    document.getElementById("inputbutton2").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = "Ya, breathing is a reason to live.";
  }
  else if (elements === "Water")
  {
    document.getElementById("choice2").style.display = "none";
    document.getElementById("inputbutton2").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = "Water is real cool. In all it's forms.";
  }
  else
  {
    myStory.innerHTML = "We are just talking about Air and Water... try again."+"<br> (hint: CapiTalIzation MatteRs.)";

  }

}
function getChoice3()
{
  var candy = document.getElementById("choice3").value;
  var myStory = document.getElementById("story");
  if(candy === "Snickers")
  {
    document.getElementById("choice3").style.display = "none";
    document.getElementById("inputbutton3").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = "haha (snickers under breath.)";
  }
  else if (candy === "Resses")
  {
    document.getElementById("choice3").style.display = "none";
    document.getElementById("inputbutton3").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = "mmmm peanut butter";
  }
  else
  {
    myStory.innerHTML = "Incorrect, Only the top candy bars need apply."+"<br> (hint: CapiTalIzation MatteRs.)";

  }
}
function getChoice4()
{
  var cheese = document.getElementById("choice4").value;
  var myStory = document.getElementById("story");
  if(cheese === "Gouda")
  {
    document.getElementById("choice4").style.display = "none";
    document.getElementById("inputbutton4").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = " Tasty, please pass the crackers.";
  }
  else if (cheese === "Edam")
  {
    document.getElementById("choice4").style.display = "none";
    document.getElementById("inputbutton4").style.display = "none";
    document.getElementById("inputbutton5").style.display = "block";
    myStory.innerHTML = "Subtle, edam is that top shelf.";
  }
  else
  {
    myStory.innerHTML = "Ummm that might be a cheese, but I refuse to talk about it."+"<br> (hint: CapiTalIzation MatteRs.)";
  }
}
function getChoice5(choice)
  {
    var answer1 = document.getElementById("inputbutton5").innerHTML;
    var myStory = document.getElementById("story");
    if (choice == 5 && answer1 == "Return to Nowhere") {
      document.getElementById("choice").style.display = "block";
      document.getElementById("inputbutton").style.display = "block";

      myStory.innerHTML = "Here we go on a flung festoon, <br> Half way up to the jealous.... <br> Would you like to go the <br> Moon? Mars? Jupiter? or... back to Earth?";
  }
}
