const makeBigger = () => {
   document.querySelector("h1").style.fontSize = "40px";
   document.querySelector(".content").style.fontSize = "30px";
};

const makeSmaller = () => {
   document.querySelector("h1").style.fontSize = "30px";
   document.querySelector(".content").style.fontSize = "20px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

