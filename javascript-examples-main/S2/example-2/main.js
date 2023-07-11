var name  = prompt("Favorite Marvel main character:");
var team = "";

switch (name) {
  case "Daredevil":
    team = "The Defenders";
    break;
 case "Spiderman":
		team = "Avengers";
    break;
 case "Black bolt":
	  team = "Inhumans";
    break;
 case "Beast":
    team = "X-Men";
    break;
 default:
		team = "Team Marvel"
		break;
}

console.log("Your favorite character is from the team " + team);