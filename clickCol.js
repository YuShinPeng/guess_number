const word = document.querySelector("#word");
const number = document.querySelector("#num");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

const guessNum = 20;
button.addEventListener("click",function(){
    const num = input.value;
    if(num == guessNum){
        word.innerText = "猜對了"
    }
    number.innerText = num;
    input.value = null;
})