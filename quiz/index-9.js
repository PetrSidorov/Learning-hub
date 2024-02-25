const input = prompt("What fruit do you like?");
const css = "color: #fffff";

switch (input) {
  case "orange":
    const css = "color: #ffa500";
    console.log("%cOrange!", css);
    break;
  case "lemon":
    const css = "color: #ffff00";
    console.log("%cYellow", css);
    break;
  default:
    console.log("No color for you");
}
