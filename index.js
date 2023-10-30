// function rollDice() 
// {
//     return Math.floor(Math.random() * 6) + 1;
// }

// document.addEventListener("DOMContentLoaded", function ()
// {   
//     var imgElement1 = document.querySelector('.img1'); 
//     var randomNumber1 = rollDice();
    
//     if(randomNumber1 === 1)
//     {
//         // imgElement.src = './images/dice1.png';
//         imgElement1.setAttribute('src', './images/dice1.png');
//     }
//     else if(randomNumber1 === 2)
//     {
//         // imgElement.src = './images/dice2.png';
//         imgElement1.setAttribute('src', './images/dice2.png');
//     }
//     else if(randomNumber1 === 3)
//     {
//         // imgElement.src = './images/dice3.png';
//         imgElement1.setAttribute('src', './images/dice3.png');
//     }
//     else if(randomNumber1 === 4)
//     {
//         // imgElement.src = './images/dice4.png';
//         imgElement1.setAttribute('src', './images/dice4.png');
//     }
//     else if(randomNumber1 === 5)
//     {
//         // imgElement.src = './images/dice5.png';
//         imgElement1.setAttribute('src', './images/dice5.png');
//     }
//     else 
//     {
//         // imgElement.src = './images/dice6.png';
//         imgElement1.setAttribute('src', './images/dice6.png');
//     }
//     console.log(randomNumber1);

//     var imgElement2 = document.querySelector('.img2'); 
//     var randomNumber2 = rollDice();
    
//     if(randomNumber2 === 1)
//     {
//         // imgElement.src = './images/dice1.png';
//         imgElement2.setAttribute('src', './images/dice1.png');
//     }
//     else if(randomNumber2 === 2)
//     {
//         // imgElement.src = './images/dice2.png';
//         imgElement2.setAttribute('src', './images/dice2.png');
//     }
//     else if(randomNumber2 === 3)
//     {
//         // imgElement.src = './images/dice3.png';
//         imgElement2.setAttribute('src', './images/dice3.png');
//     }
//     else if(randomNumber2 === 4)
//     {
//         // imgElement.src = './images/dice4.png';
//         imgElement2.setAttribute('src', './images/dice4.png');
//     }
//     else if(randomNumber2 === 5)
//     {
//         // imgElement.src = './images/dice5.png';
//         imgElement2.setAttribute('src', './images/dice5.png');
//     }
//     else 
//     {
//         // imgElement.src = './images/dice6.png';
//         imgElement2.setAttribute('src', './images/dice6.png');
//     }
//     console.log(randomNumber2);

//     var headingElem1 = document.querySelector('h1');

//     if(randomNumber1 === randomNumber2)
//     {
//         headingElem1.innerHTML = "Draw!";
//     }
//     else if(randomNumber1 > randomNumber2)
//     {
//         headingElem1.innerHTML = "Player 1 wins!";
//     }
//     else 
//     {
//         headingElem1.innerHTML = "Player 2 wins!";
//     }
    
// });

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Assign a random number to the variable. 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png 

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 wins!"; 
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"; 
}
else {
    document.querySelector("h1").innerHTML = "DRAW!";
}