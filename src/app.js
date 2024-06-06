/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "a", "one", "for", "other", "each", "all"];
  let adjective = [
    "great",
    "big",
    "wonderful",
    "spectacular",
    "impressive",
    "stunning"
  ];
  let noun = [
    "idea",
    "innovate",
    "spaces",
    "star",
    "ventures",
    "spaces",
    "vision"
  ];

  let domainExtension = [".com", ".es", ".fr", ".de", ".org", ".edu", ".co.uk"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domainExtension.length; l++) {
          console.log(pronoun[i] + adjective[j] + noun[k] + domainExtension[l]);
        }
      }
    }
  }
};
