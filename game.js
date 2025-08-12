
function start() {
    document.getElementById("container").style.display = "block";
    document.getElementById("startGame").style.display = "none";
    document.getElementById("epicmusic").play();
    document.getElementById("epicmusic").loop = true;
}
const wordInput = document.getElementById("wordInput");
let passedFirst = false;
function submitWord() {
    const isFullyKorean = (str) => /^[\uAC00-\uD7A3]+$/.test(str);
    const word = wordInput.value.trim();
    if (word) {
        if(isFullyKorean(word)) {
            if(word.length < 2) {
                alert("두 글자 이상 입력하세요 ㅗㅗㅗ");
                wordInput.value = ""; // Clear the input field
                wordInput.focus(); // Focus back on the input field
                return; // Exit the function if the input is too short
            } else {
                if(word == "이리듐") {
                    alert("걍 ㅗㅗㅗ");
                    wordInput.value = ""; // Clear the input field
                    wordInput.focus(); // Focus back on the input field
                    return; // Exit the function if the word is "이리듐"
                } else {
                    // if(passedFirst) {
                    //     fetch("https://krdict.korean.go.kr/api/search/사과")
                    //         .then(console.log(Response));

                    // } else {
                        const lastChar = word.charAt(word.length - 1);
                        doomCheck(lastChar);
                        wordInput.value = ""; // Clear the input field
                    // }
                }
            }
        } else {
            alert("한글로 풀 단어 쓰세요 ㅗㅗㅗ");
            wordInput.value = ""; // Clear the input field
            wordInput.focus(); // Focus back on the input field
            return; // Exit the function if the input is not valid
        }
    } else {
        alert("단어 입력하세요 ㅗㅗㅗ");
        return;
    }
}
function doomCheck(lastChar) {
    if(lastChar == '듐') {
        passedFirst=true;
        document.getElementById("currentWord").innerText = "듐피스트";
        wordInput.value = ""; // Clear the input field
        wordInput.focus(); // Focus back on the input field
    } else {
        endGame(lastChar);
    }
}
function endGame(lastChar) {
    document.getElementById("container").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
    document.getElementById("epicmusic").pause();
    document.getElementById("epicmusic").currentTime = 0; // Reset
    document.getElementById("gameoverText").innerHTML = `<span id="first">${lastChar}</span>리듐`;
}