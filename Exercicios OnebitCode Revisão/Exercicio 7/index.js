let spaceshipName = prompt("Write the name of the spaceship: ");
let newSpaceshipName = "";
for (let i = spaceshipName.length - 1; i >= 0; --i) {
  if (spaceshipName[i] == "e" || spaceshipName[i] == "E") {
    break;
  }
  newSpaceshipName += spaceshipName[i];
}
alert(
  "Nome da nave: " +
    spaceshipName +
    "\n" +
    "Nome invertido: " +
    newSpaceshipName
);
