document.addEventListener('DOMContentLoaded', () => {
     
    function startGuessingGame() {
        let name;
        while (!name) {
            name = prompt("Hi! What's your name?");
            if (!name) {
                alert('Please enter a name, ex: "Quinn"');
            }
        }

        function playGame() {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            console.log(randomNumber);
            let guessCount = 0;
            let userGuess;

            userGuess = prompt("Guess a number between 1 and 10!");
            while (true) {
                if (isNaN(userGuess) || userGuess.trim() === "") {
                    alert("Please enter a valid response");
                    userGuess = prompt("Guess a number between 1 and 10!");
                    continue;
                }
                userGuess = parseInt(userGuess);
                guessCount++;

                if (userGuess === randomNumber) {
                    alert(`You guessed it in ${guessCount} guesses!`);
                    break;
                } else if (userGuess > randomNumber) {
                    userGuess = prompt("Guess was too high, guess again!");
                } else {
                    userGuess = prompt("Guess was too low, guess again!");
                }
            }

            if (confirm(`${name}, would you like to keep playing this game?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) {
           
                document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
            } else {
                alert(`See you later, ${name}!`);
            }
        }

        playGame();
    }

     
    const startMagicEightBallGame = function() {
        function getUserName() {
            let name;
            while (!name) {
                name = prompt("What is your name?");
                if (name === null) {
                    alert("See you later!");
                    return null;
                } else if (!name.trim()) {
                    alert("Please type your name.");
                    name = null;
                }
            }
            return name;
        }

        let userName = getUserName();

        if (userName !== null) {
            const responses = ["Yes!", "Nope", "Unclear", "Absolutely", "Ask again later", "It's possible", "Impossible"];

            function getRandomResponse() {
                return responses[Math.floor(Math.random() * responses.length)];
            }

            function playGame() {
                while (true) {
                    let userQuestion = prompt(`Hi, ${userName}! What's your question?`);

                    if (userQuestion === null) {
                        alert("See you later!");
                        break;
                    } else {
                        alert(`${getRandomResponse()}`);
                    }

                    if (!confirm(`${userName}, would you like to keep playing this game?`)) {
                        if (confirm(`${userName}, would you like to pick another game to play?`)) {
                           
                            document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
                        } else {
                            alert(`See you later, ${userName}!`);
                            break;
                        }
                    }
                }
            }

            playGame();
        }
    };

   
    const startBearNinjaHunterGame = () => {
        function toForcedCase(input) {
            return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        }

        let name;
        while (!name) {
            name = prompt('Welcome to Bear Ninja Hunter! Please enter your name to get started:');
            if (!name) {
                alert('Please enter your name');
            }
        }
        alert(`Hi ${name} let's play!`);

        function playGame() {
            let choices = ['Bear', 'Ninja', 'Hunter'];
            let playerChoice = toForcedCase(prompt('Who are you: Bear, Ninja, or Hunter?'));

            while (!choices.includes(playerChoice)) {
                alert('Please enter a valid response');
                playerChoice = toForcedCase(prompt('Who are you: Bear, Ninja, or Hunter?'));
            }

            let randomIndex = Math.floor(Math.random() * 3);
            let computerChoice = choices[randomIndex];

            let outcome;
            switch (playerChoice + computerChoice) {
                case 'BearBear':
                case 'NinjaNinja':
                case 'HunterHunter':
                    outcome = 1;
                    break;
                case 'BearHunter':
                case 'NinjaBear':
                case 'HunterNinja':
                    outcome = 2;
                    break;
                case 'BearNinja':
                case 'NinjaHunter':
                case 'HunterBear':
                    outcome = 3;
                    break;
            }

            let message = `${name} you picked ${playerChoice}!\nThe computer picked ${computerChoice}!`;

            if (outcome === 1) {
                message += "\nIt's a tie!";
            } else if (outcome === 2) {
                message += "\nYou win!";
            } else if (outcome === 3) {
                message += "\nYou lose!";
            }

            alert(message);

            if (confirm(`${name}, would you like to keep playing this game?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) {
         
                document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
            } else {
                alert(`See you later, ${name}!`);
            }
        }

        playGame();
    };

    function openGame(gameId) {
    
        const games = document.querySelectorAll('.game-container');
        games.forEach(game => game.style.display = 'none');


        document.getElementById(gameId).style.display = 'block';

        if (gameId === 'game1') {
            startGuessingGame();
        } else if (gameId === 'game2') {
            startMagicEightBallGame();
        } else if (gameId === 'game3') {
            startBearNinjaHunterGame();
        }
    }

    window.openGame = openGame;
});