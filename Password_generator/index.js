const gen = document.getElementById("generateButton");
const res = document.getElementById("resetButton");
const cop = document.getElementById("copyToClipboard")
const lab = document.getElementById("password");
const capitalLetters = document.getElementById("capitalLetters");
const numbers = document.getElementById("numbers");
const smallLetters = document.getElementById("smallLetters");
const responseMessage = document.getElementById("copyMessage");
const passwordLength = document.getElementById("passwordLength")

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const CAP_LETTER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const SMALL_LETTER = ["a", "b", "c", "d", "e", "f", "g", "h", 'i', "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let password = "";

const generatePassword = () => {
    let passcode = "";
    let useList = [];
    let count = 0;
    let leng = Number(passwordLength.value);
    if (isNaN(leng)){
        window.alert("Password length not valid!!")
    }else{
        if (capitalLetters.checked){
            useList.push(CAP_LETTER);
            count++;
        }
        if (numbers.checked){
            useList.push(NUMBERS);
             count++;
        }
        if (smallLetters.checked){
            useList.push(SMALL_LETTER);
            count++;
        }
        if (count==0){
            lab.textContent = "Click to generate Password";
            window.alert("Please select a category to generate a valid password!");
        }
        for (let i = 0; i < leng; i++){
            let car = Math.floor(Math.random()*count)
            let len = useList[car].length
            passcode+=useList[car][Math.floor(Math.random()*len)]
        }
        lab.textContent = passcode;
    }
}

const reset = () => {
    lab.textContent = "Click to generate Password"
}

const copy = () => {
    if (lab.textContent!="Click to generate Password"){
        navigator.clipboard.writeText(lab.textContent);
        responseMessage.classList.add("show");
        responseMessage.classList.remove("hide");
        setTimeout(() => {
            responseMessage.classList.add("hide");
            responseMessage.classList.remove("show");
        }, 3000);
    }else{
        window.alert("Please generate a password before copying it to the clipboard")
    }
}

numbers.checked = false;
smallLetters.checked = false;
capitalLetters.checked = false;

gen.onclick = generatePassword;
res.onclick = reset;
cop.onclick = copy;



