let currentColor = 1;
function changeColor() {
    const colors = ['black', 'white'];
    for(let i=0;i<10;i++) {
        setTimeout(() => {
            document.getElementById("title").style.color = colors[currentColor];
            currentColor = (currentColor + 1) % colors.length;
        }, 200 * (i + 1));
    }
    
}
function startGame() {
    document.getElementById("boo").play();
    document.getElementById("logo").classList.add("popup");
    setTimeout(() => {
        // Wait for the  animation to complete before redirecting
        setTimeout(() => {
            window.location.href = "game.html";
        }, 300); // 300ms matches the fadeOut animation duration
    }, 1000);
}
