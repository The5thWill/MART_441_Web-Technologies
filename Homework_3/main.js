
function storyFunction(choice) {
  var answer1 = document.getElementById("choice1").innerHTML;
  var answer2 = document.getElementById("choice2").innerHTML;
  if (choice == 1 && answer1 == "Yes") {
      document.getElementById("story").innerHTML = "You walk up to a set of heavy reinforced dark oak double doors";
      document.getElementById("choice1").innerHTML = "Knock";
      document.getElementById("choice2").innerHTML = "Open them by force";
  } else if (choice == 2 && answer2 == "No") {
      document.getElementById("story").innerHTML = "You turn to travel back along the long and winding pathe that led you here, but as you do so someone is approaching the tower";
      document.getElementById("choice1").innerHTML = "Greet them";
      document.getElementById("choice2").innerHTML = "Hide";
  } else if (choice == 1 && answer1 == "Knock") {
      document.getElementById("story").innerHTML = "The large doors slowly creak open revealing an unlit interior and no one holding them open.";
      document.getElementById("choice1").innerHTML = "Light a torch";
      document.getElementById("choice2").innerHTML = "Plunge into the darkness";
  } else if (choice == 2 && answer2 == "Open them by force") {
      document.getElementById("story").innerHTML = "You push and push and push, at first they seem not to budge, then they give way ever so slightly, but you quickly loose focus on the doors as you fall down due to the unexpected and well hidden trap door opening under you.";
      document.getElementById("choice1").innerHTML = "Grab the edge";
      document.getElementById("choice2").innerHTML = "Let yourself fall";
  } else if (choice == 1 && answer1 == "Greet them") {
      document.getElementById("story").innerHTML = "You introduce yourself and the figure in robes responds in kind telling you he is one of Valkyrus' acolytes Lucien'";
      document.getElementById("choice1").innerHTML = "Ask him for help";
      document.getElementById("choice2").innerHTML = "Continue to leave";
  } else if (choice == 2 && answer2 == "Hide") {
      document.getElementById("story").innerHTML = "You dive into bushes next to the door, and wait as the figure approaches and then begins to open the door";
      document.getElementById("choice1").innerHTML = "Slip inside";
      document.getElementById("choice2").innerHTML = "Stay hidden";
  }
  else if (choice == 1 && answer1 == "Light a torch") {
      document.getElementById("story").innerHTML = "A large foyer reveals itself before you, a large chandeler hangs in the middle of two staircase leading to a balcony.";
      document.getElementById("choice1").innerHTML = "Search the room";
      document.getElementById("choice2").innerHTML = "Go upstairs";
  } else if (choice == 2 && answer2 == "Plunge into the darkness") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 1 && answer1 == "Grab the edge") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 2 && answer2 == "Let yourself fall") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 1 && answer1 == "Ask him for help") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 2 && answer2 == "Continue to leave") {
      document.getElementById("story").innerHTML = "Lucien does not bar your pass and lets you go avoiding adventure and wealth, but also the possible danger" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 1 && answer1 == "Slip inside") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 2 && answer2 == "Stay hidden") {
      document.getElementById("story").innerHTML = "To be continued" + "<br>Restart?";
      document.getElementById("choice1").innerHTML = "Restart";
      document.getElementById("choice2").innerHTML = "Quit";
  } else if (choice == 1 && answer1 == "Restart") {
      document.getElementById("story").innerHTML = "You have come upon the imposing stature of the tower of The Great Wizard Valkyrus, are you ready to enter?";
      document.getElementById("choice1").innerHTML = "Yes";
      document.getElementById("choice2").innerHTML = "No";
  } else if (choice == 2 && answer2 == "Quit") {
      document.getElementById("story").innerHTML = "The Tower still awaits";

  }


}
