let users = [
    { username: "MaXX Admin", password: "11092012" },
    { username: "Timo Lehmann", password: "1608" },
    { username: "Dunja Lehmann", password: "1007" },
    { username: "Dominik", password: "0707" },
    { username: "Thomas Lehmann", password: "1234" }
];


// Login prüfen
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let foundUser = users.find(user => 
    user.username === username && user.password === password
  );

  if (foundUser) {
    alert("Login erfolgreich!");
  } else {
    alert("Falsche Daten!");
  }
}