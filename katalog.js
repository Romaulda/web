 // Работа с корзиной
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.querySelector('.cart-count');
        
        // Обновляем счетчик корзины
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalItems;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
        // Добавление товара в корзину
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const title = this.getAttribute('data-title');
                const price = parseInt(this.getAttribute('data-price'));
                
                // Проверяем, есть ли товар уже в корзине
                const existingItem = cart.find(item => item.id === id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id,
                        title,
                        price,
                        quantity: 1
                    });
                }
                
                updateCartCount();
                
                // Анимация добавления
                this.textContent = 'Добавлено!';
                this.style.backgroundColor = '#4CAF50';
                setTimeout(() => {
                    this.textContent = 'В корзину';
                    this.style.backgroundColor = '#ffcc00';
                }, 1000);
            });
        });
        
        // Модальное окно
        const modal = document.getElementById("infoModal");
        const btn = document.getElementById("infoBtn");
        const span = document.getElementsByClassName("close")[0];
        
        btn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
        }
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        // Инициализация счетчика при загрузке
        updateCartCount();