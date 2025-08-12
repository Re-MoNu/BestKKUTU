
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
                    const lastChar = word.charAt(word.length - 1);
                    if(passedFirst) {
                        fetchWord(lastChar);
                    } else {
                        doomCheck(lastChar);
                        wordInput.value = ""; // Clear the input field
                    }
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
const api_key = "81B2D9DD8828E68B4F0E534EEBF0E47B";
async function fetchWord(lastChar) {
        
        const userInput = lastChar;
        const api_url = `https://krdict.korean.go.kr/api/search?key=${api_key}&type_search=search&part=word&q=${userInput}&sort=dict`;
        console.log(userInput);
        try {
            const response = await fetch(api_url);
            if(!response.ok) {
                throw new Error("failed to fetch");
            }
            const data = await response.text();
            console.log(data);
        }
        catch (error) {
            console.error(error);
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