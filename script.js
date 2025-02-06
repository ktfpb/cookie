document.addEventListener("DOMContentLoaded", function() {
    let cookie = document.getElementById("cookie");
    let heartCount = 0;

    document.addEventListener("selectstart", function(e) {
        e.preventDefault();
    });

    cookie.addEventListener("click", function() {
        heartCount++;
        createFallingHeart();

        cookie.style.animation = "disappear 0.3s ease-in-out forwards";
        
        setTimeout(() => {
            cookie.style.animation = "appear 0.3s ease-in-out forwards";
        }, 300);
    });

    function createFallingHeart() {
        let heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.innerText = "❤️";

        const randomSize = Math.floor(Math.random() * 80) + 20; 
        heart.style.fontSize = `${randomSize}px`;

        heart.style.userSelect = "none";
        heart.style.webkitUserSelect = "none";
        heart.style.mozUserSelect = "none";
        heart.style.msUserSelect = "none";

        document.body.appendChild(heart);

        let startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.top = "-50px";

        setTimeout(() => heart.remove(), 3000);

        setInterval(() => {
            let heartLoop = document.createElement("div");
            heartLoop.classList.add("falling-heart");
            heartLoop.innerText = "❤️";

            const loopSize = Math.floor(Math.random() * 80) + 20; // От 20 до 100
            heartLoop.style.fontSize = `${loopSize}px`;

            heartLoop.style.userSelect = "none";
            heartLoop.style.webkitUserSelect = "none";
            heartLoop.style.mozUserSelect = "none";
            heartLoop.style.msUserSelect = "none";

            document.body.appendChild(heartLoop);

            let loopX = Math.random() * window.innerWidth;
            heartLoop.style.left = `${loopX}px`;
            heartLoop.style.top = "-50px";

            setTimeout(() => heartLoop.remove(), 3000);
        }, 5000 / heartCount);
    }
});
