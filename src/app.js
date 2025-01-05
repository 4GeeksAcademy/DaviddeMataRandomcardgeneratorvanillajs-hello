/* eslint-disable */
import "./style.css";
window.onload = function() {
  //write your code here
  let first = "A ";

  let palos = ["diamantes", "corazones", "picas", "treboles"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  let randomNumeros = Math.floor(Math.random() * numeros.length);
  let randomPalos = Math.floor(Math.random() * palos.length);
  let finalSuit = palos[randomPalos];

  document.getElementById("cardContent").innerHTML = numeros[randomNumeros];
  document.getElementById("theCard").className = "";
  document.getElementById("theCard").classList.add("card");
  document.getElementById("theCard").classList.add(getSuiteClass(finalSuit));

  function getSuiteClass(palos) {
    switch (palos) {
      case "diamantes":
        return "suit-diamantes";
      case "picas":
        return "suit-picas";
      case "corazones":
        return "suit-corazones";
      case "treboles":
        return "suit-treboles";
    }
  }
};
