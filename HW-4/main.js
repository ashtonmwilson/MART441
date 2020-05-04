// console.log("testing\""\\n\"." as anew line" ); ya... if you can explain how to see this actually work, that would be great... I cannot get /n/ to work at all... there is also no use of it in any of the interactive shels on the course site. 
//console.log("testing math"+"half of 100is ${100/2}");
//console.log("")
function menuFunction(choice) {
    var answer1 = document.getElementById("option1").innerHTML;
    var answer2 = document.getElementById("option2").innerHTML;
    var answer3 = document.getElementById("option3").innerHTML;
    if (choice == 1 && answer1 == "Eat") {
        document.getElementById("story").innerHTML = "Smart "+"desicion might as well break that fast...";
        document.getElementById("option1").innerHTML = "Donuts";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
    }
    else if (choice == 2 && answer2 == "Sleep") {
        document.getElementById("story").innerHTML = " Strangely familiar... You have just emerged from a deep sleep, time to make some descions.";
        document.getElementById("option1").innerHTML = "Eat";
        document.getElementById("option2").innerHTML = "Sleep";
        document.getElementById("option3").innerHTML = "Work";
    }
    else if (coice == 3 && answer3 == "Work") {
        document.getElementById("story").innerHTML = "One man's work is another man's... "+"torture";
        document.getElementById("option1").innerHTML = "manual labor";
        document.getElementById("option2").display = "none";
        document.getElementById("option3").innerHTML = "sit down and compute";
    }
    else if (choice == 1 && answer1 == "Donuts") {
        document.getElementById("story").innerHTML = "Strangest thing, the donuts gave you a fast burst of energy, but it's fading...";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").innerHTML = "Sleep";
        document.getElementById("option3").innerHTML ="Work";
    }
    else if (choice == 1 && answer1 == "manual labor") {
        document.getElementById("story").innerHTML = "Wow, you really are 'of the people' <br> but all that labor sure has you tired";
        document.getElementById("option1").innerHTML = "Eat";
        document.getElementById("option2").innerHTML = "Sleep";
        document.getElementById("option3").style.display = "none";
    }
    else if (choice == 3 && answer3 == "sit down and compute") {
        document.getElementById("story").innerHTML = "wow how time flies, <br> It's been days since you slept, or moved. <br> Luckily the brightness on your monitor is above 2700 kelvin, <br> so you're not even tired... what to do? ";
        document.getElementById("option1").innerHTML = "Eat";
        document.getElementById("option2").innerHTML = "Sleep";
        document.getElementById("option3").innerHTML = "Work";
    }
}
