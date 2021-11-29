function addUser() {
  player1_name=document.getElementById("player1_name_input").value;
  player2_name=document.getElementById("player2_name_input").value;
  LocalStorage.setItem("player1_name",player1_name);
  LocalStorage.setItem("player2_name",player2_name);
  window.location="2math.html";
}
