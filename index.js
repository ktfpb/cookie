document.addEventListener("DOMContentLoaded", function() {
    let cookie = document.getElementById("cookie");
    let heartCount = 0;

    cookie.addEventListener("click", function() {
        heartCount++;
        createFallingHeart();

        // Печенька крутится на 360° при клике, но не исчезает
        cookie.style.animation = "rotate 0.5s ease-in-out";
        setTimeout(() => cookie.style.animation = "", 500);
    });

    function createFallingHeart() {
        // Создаем одно падающее сердечко
        let heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.innerText = "❤️";
        document.body.appendChild(heart);

        // Случайная позиция по горизонтали
        let startX = Math.random() * window.innerWidth;  
        heart.style.left = `${startX}px`;
        heart.style.top = "-50px";

        setTimeout(() => heart.remove(), 3000);

        // Запускаем дождь сердечек за печенькой
        setInterval(() => {
            let heartLoop = document.createElement("div");
            heartLoop.classList.add("falling-heart");
            heartLoop.innerText = "❤️";
            document.body.appendChild(heartLoop);

            let loopX = Math.random() * window.innerWidth;  // Случайная позиция
            heartLoop.style.left = `${loopX}px`;
            heartLoop.style.top = "-50px";

            setTimeout(() => heartLoop.remove(), 3000);
        }, 5000 / heartCount);  // Чем больше кликов, тем чаще падают сердца
    }
});
