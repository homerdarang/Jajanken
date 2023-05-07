
// Player 1
let choiceMe = document.querySelectorAll(".btn .img-style");
let imgMe = document.querySelector(".ones");

let you;
let yourScore = 0;

// Computer
let compImg = document.querySelector(".comps");
let computerChoice;
let computerScore = 0;


let maxScore = 10;

let choice = ["rock", "paper", "scissor"];


// TODO 1. inside window load, create a forEach loop inside forEach loop, add click event listener for every choice the user clicked.
// TODO 1.1 in the click event listener, add the output of the computer
// TODO 2. add different animation color to the computer output.
window.onload = () => {
    choiceMe.forEach(opt => {
        opt.addEventListener("click", () => {

            let yourChoice = opt.getAttribute("id");
            // imgMe.src = "img/" + yourChoice + ".png";
            imgMe.src = `img/${yourChoice}.png`;

            // TODO 4. Generate Computer output
            let compChoice = choice[Math.floor(Math.random() * 3)];
            // compImg.src = "img/" + compChoice + ".png";
            compImg.src = `img/${compChoice}.png`;
            
            // TODO 6. Call the animation button from TODO 3.
            animatedButton();

            // TODO 7. Call the compareAnswer function from TODO 7.
            compareAnswer(yourChoice, compChoice);


        });
    });

}

// TODO 3. Create a animation function to the user output
function animatedButton() {
    $(".ones").addClass("pressed");
    $(".comps").addClass("comp-pressed");

    setTimeout(function() {
        $(".ones").removeClass("pressed");
        $(".comps").removeClass("comp-pressed");
    }, 100);
}


// TODO 5. Create a function to compare the user and computer scores.
function compareAnswer(user, computer) {
    if (user === "rock" && computer === "scissor") {
        yourScore += 1;
    }

    else if (user === "paper" && computer === "rock") {
        yourScore += 1;
    }

    else if (user === "scissor" && computer === "paper") {
        yourScore += 1;
    }

    else if (computer === "rock" && user === "scissor") {
        computerScore += 1;
    }

    else if (computer === "paper" && user === "rock") {
        computerScore += 1;
    }

    else if (computer === "scissor" && user === "paper") {
        computerScore += 1;
    }

    document.querySelector(".user-score").innerText = yourScore;
    document.querySelector(".computer-score").innerText = computerScore;
}




// let img = document.querySelector("#img1");
// let btn1 = document.querySelector("#butn").addEventListener('click', () => {
//     img.src = "./imgs/paper2.png";
// });
