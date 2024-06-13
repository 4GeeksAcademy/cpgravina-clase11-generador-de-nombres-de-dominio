/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronounList = ["the", "our", "a", "one", "for", "other", "each", "all"];
  const adjectiveList = [
    "great",
    "big",
    "wonderful",
    "spectacular",
    "impressive",
    "stunning"
  ];
  const nounList = [
    "idea",
    "innovate",
    "spaces",
    "star",
    "ventures",
    "spaces",
    "vision"
  ];

  const domainExtensionList = [
    ".com",
    ".es",
    ".fr",
    ".de",
    ".org",
    ".edu",
    ".co.uk"
  ];

  for (let i = 0; i < pronounList.length; i++) {
    for (let j = 0; j < adjectiveList.length; j++) {
      for (let k = 0; k < nounList.length; k++) {
        for (let l = 0; l < domainExtensionList.length; l++) {
          let domainNameGenerator =
            pronounList[i] +
            adjectiveList[j] +
            nounList[k] +
            domainExtensionList[l];
          console.log(domainNameGenerator);
        }
      }
    }
  }
};
