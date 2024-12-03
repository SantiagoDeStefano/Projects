const password = document.getElementById("random_password");
const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '@', '.', '-', '_', '+'
  ];
  console.log(specialCharacters);
  

function randomPassword() {
    let passwordLength = Math.floor(Math.random()*(18 - 14 + 1)) + 14;
    let strongPassword = "";
    for(let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random()*characters.length);
        strongPassword = strongPassword + characters[randomIndex];
    }
    console.log(strongPassword);
    password.textContent = strongPassword;
}


