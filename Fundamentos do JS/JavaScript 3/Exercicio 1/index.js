function addPlayer() {
  const position = document.getElementById("playerPosition").value;
  const shirtNumber = document.getElementById("shirtNumber").value;
  const name = document.getElementById("playerName").value;

  const confirmation = confirm(
    "Deseja escalar o : " + name + " na posição " + position + "?"
  );

  if (confirmation) {
    const playerList = document.getElementById("playerList");
    const playerItem = document.createElement("li");
    playerItem.id = "player_" + shirtNumber;
    playerItem.innerText = position + " : " + name + " (" + shirtNumber + ")";
    playerList.appendChild(playerItem);
  }

  document.getElementById("playerPosition").value = "";
  document.getElementById("shirtNumber").value = "";
  document.getElementById("playerName").value = "";
}

function removePlayer() {
  const playerList = document.getElementById("playerList");
  const shirtNumberRemove = document.getElementById("shirtNumberRemove").value;
  const playerRemove = document.getElementById("player_" + shirtNumberRemove);

  const confirmation = confirm(
    "Deseja Remover o : " + playerRemove.innerText + "?"
  );

  if (confirmation) {
    playerList.removeChild(playerRemove);
  }

  document.getElementById("shirtNumberRemove").value = "";
}
