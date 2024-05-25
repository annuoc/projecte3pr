/**
 * Nom: Annuska Raventós
 * Projecte: PR Projecte 3
 * Data: 2024-05-26
 * Descripció: Web de recomanació de música.
 * Funcions principals: navegació, verificació de l'usuari,
 * visualització de dades.
 * Faig servir elements bootstrap.
 */

/*variables*/

var storedPassword;
var storedUser;
var signupUsername;

/*funció per mostrar el nom de l'usuari a la pàgina library*/

window.onload = function () {
  var userDisplay = document.getElementById("userdisplay");
  var storedUsername = localStorage.getItem("signupUsername");
  if (storedUsername) {
    userDisplay.innerText = "Welcome, " + storedUsername + "!";
  }
};

var albumDatabase = [
  {
    name: "Chappell Roan",
    imageUrl:
      "https://i.discogs.com/ygtshK9meu6dQh4GvpUMieJbD5zC-uIVCKYSgRdaHDk/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNDU1/ODEzLTE3MTM2Mzkw/NzktMTM1OS5qcGVn.jpeg",
  },
  {
    name: "Kendrick Lamar",
    imageUrl:
      "https://i.discogs.com/NlmkKrMlFUvKaaW5GUSKFRrMB1snZbF9Zx6_fMUsBtY/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NzU5/NTMtMTU3MDQwNDUz/Ni01NDY1LmpwZWc.jpeg",
  },
  {
    name: "Fleetwood Mac",
    imageUrl:
      "https://i.discogs.com/zcxV6WbbICrlyKma_O_rmXTIjO4-CzotXbsuRjWyuHs/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNDM0/MTg5LTE3MTM3OTc1/NjktODI0OC5qcGVn.jpeg",
  },
  {
    name: "Herbie Hancock",
    imageUrl:
      "https://i.discogs.com/PzhEnDeEy-u3foEvF-q1mPZDeTGt__d6k4j9XUZ7q_c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMzgx/LTE0MzMyNTkxNDMt/ODUyMi5qcGVn.jpeg",
  },
];

var userDatabase = [
  { name: " Bethanie Marta", imageUrl: "images/user1.png" },
  { name: " Hywel Diodore ", imageUrl: "images/user2.png" },
  { name: " Bogdan Rusul ", imageUrl: "images/user3.png" },
  { name: " Ansar Azad ", imageUrl: "images/user4.png" },
];

var radioDatabase = [
  { name: "Jazz", imageUrl: "images/user1.png" },
  { name: "Rock", imageUrl: "images/user2.png" },
  { name: "Pop", imageUrl: "images/user3.png" },
  { name: "Folk", imageUrl: "images/user4.png" },
  { name: "Techno", imageUrl: "images/user3.png" },
  { name: "Hip-Hop", imageUrl: "images/user4.png" },
];

var artistDatabase = [
  {
    name: "Moby",
    imageUrl:
      "https://i.discogs.com/K0y8P_Ku0O0Gn68p1mpV9iy55NImDYQbIx06QGpMuC0/rs:fit/g:sm/q:90/h:395/w:395/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMzEt/MTU1MzE1MzY1Ny03/Mjk3LmpwZWc.jpeg",
  },
  {
    name: "Kate Bush",
    imageUrl:
      "https://i.discogs.com/iY4TL7Bjl42Sv2f4w_PJsi85nSa7pxz7BML3IVUmRz0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg1OTI5/LTE2NDE0ODcxOTEt/NDU5Ni5qcGVn.jpeg",
  },
  {
    name: "Pet Shop Boys",
    imageUrl:
      "https://i.discogs.com/XWLTCucszUYffuoUWAJ_JggCdjY8mDi0lAn8RC_GrFY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTc1NTIt/MTI4NDExMjk3NS5q/cGVn.jpeg",
  },
  {
    name: "Lauryn Hill",
    imageUrl:
      "https://i.discogs.com/jsrQjCaexf4tm3ilUO-_3fvJPEBpYhi5pr8xquu3w2U/rs:fit/g:sm/q:90/h:565/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQyNjI3/LTEzMTQ3MjA1Nzgu/anBlZw.jpeg",
  },
];

/*contenidors*/
var albumMainContent = document.querySelector(".main-content.album");
var userMainContent = document.querySelector(".main-content.users");
var radioMainContent = document.querySelector(".main-content.radios");
var artistMainContent = document.querySelector(".main-content.artist");

//creacio de cada tarjeta o secció
radioDatabase.forEach(function (currentUser) {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = currentUser.imageUrl;
  img.alt = currentUser.name;
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = currentUser.name;
  cardBody.appendChild(title);

  card.appendChild(cardBody);

  radioMainContent.appendChild(card);
});

albumDatabase.forEach(function (currentUser) {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = currentUser.imageUrl;
  img.alt = currentUser.name;
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = currentUser.name;
  cardBody.appendChild(title);

  card.appendChild(cardBody);

  albumMainContent.appendChild(card);
});

artistDatabase.forEach(function (currentUser) {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = currentUser.imageUrl;
  img.alt = currentUser.name;
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = currentUser.name;
  cardBody.appendChild(title);

  card.appendChild(cardBody);

  artistMainContent.appendChild(card);
});

userDatabase.forEach(function (currentUser) {
  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = currentUser.imageUrl;
  img.alt = currentUser.name;
  card.appendChild(img);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = currentUser.name;
  cardBody.appendChild(title);

  card.appendChild(cardBody);

  userMainContent.appendChild(card);
});

/*estils*/
radioMainContent.style.display = "flex";
radioMainContent.style.flexWrap = "wrap";
albumMainContent.style.display = "flex";
albumMainContent.style.flexWrap = "wrap";
userMainContent.style.display = "flex";
userMainContent.style.flexWrap = "wrap";
artistMainContent.style.display = "flex";
artistMainContent.style.flexWrap = "wrap";

/*funció per guardar la informació de l'usuari*/
function saveData() {
  var signupForm = document.getElementById("signupForm");
  signupUsername = signupForm.signupUsername.value;
  var signupPassword = signupForm.signupPassword.value;
  var signupEmail = signupForm.signupEmail.value;

  if (signupUsername == "" || signupEmail == "" || signupPassword == "") {
    alert("error");
  } else if (signupPassword.length < 8) {
    alert("error");
  } else if (!signupEmail.includes("@") || !signupEmail.includes(".")) {
    alert("Invalid email");
  } else {
    localStorage.setItem("signupUsername", signupUsername);
    localStorage.setItem("signupPassword", signupPassword);
    localStorage.setItem("signupEmail", signupEmail);
    storedUser = signupUsername;
    storedPassword = signupPassword;
    alert("Usuari registrat correctament!");
    window.location.href = "login.html";
  }
}
/*funció de verificació de l'usuari*/
function logInVerification() {
  var loginForm = document.getElementById("loginForm");
  var loginUsuari = loginForm.loginUsername.value;
  var loginPassword = loginForm.loginPassword.value;
  storedUser = localStorage.getItem("signupUsername");
  storedPassword = localStorage.getItem("signupPassword");
  if (loginUsuari == storedUser && loginPassword == storedPassword) {
    alert("Login correcte!");
    window.location.href = "explore.html";
  } else {
    alert("Usuari o contrasenya incorrectes!");
  }
}
