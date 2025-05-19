// Получаем модальное окно
        const modal = document.getElementById("infoModal");
        // Получаем кнопку, которая открывает модальное окно
        const btn = document.getElementById("infoBtn");
        // Получаем элемент <span>, который закрывает модальное окно
        const span = document.getElementsByClassName("close")[0];
        
        // Когда пользователь нажимает на кнопку, открываем модальное окно
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        // Когда пользователь нажимает на <span> (x), закрываем модальное окно
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        body.modal-open {
            overflow: hidden;
            position: fixed;
        }