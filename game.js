const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const result = document.getElementById("result");
const playButton = document.getElementById("playButton");

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function setImageSource(image, number) {
    switch (number) {
        case 1:
            image.setAttribute("src", "images/rock.jpeg");
            break;
        case 2:
            image.setAttribute("src", "images/scissor.jpeg");
            break;
        case 3:
            image.setAttribute("src", "images/paper.jpeg");
            break;
        default:
            break;
    }
}

function updateResultText(number1, number2) {
    if (number1 === number2) {
        result.textContent = "It's a draw!";
    } else if ((number1 === 1 && number2 === 3) || (number1 === 2 && number2 === 1) || (number1 === 3 && number2 === 2)) {
        result.textContent = "Player 2 wins!";
    } else {
        result.textContent = "Player 1 wins!";
    }
}

playButton.addEventListener("click", () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    setImageSource(image1, randomNumber1);
    setImageSource(image2, randomNumber2);
    updateResultText(randomNumber1, randomNumber2);
});
