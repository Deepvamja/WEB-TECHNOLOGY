let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
};

choices.forEach((choice) =>{

    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
    
});