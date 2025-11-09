// =====================================================
// ЛЕТНИЙ СТАРТ - ИНТЕРАКТИВНОСТЬ
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ПЛАВНАЯ ПРОКРУТКА =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Игнорируем пустые якоря и якоря, которые не существуют
            if (href === '#' || href === '#register' || href === '#catalog' || href === '#about' || href === '#partners' || href === '#partners-info' || href === '#success' || href === '#privacy' || href === '#terms') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню если оно открыто
                const nav = document.querySelector('.nav');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // ===== МОБИЛЬНОЕ МЕНЮ =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Анимация иконки бургера
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Закрываем меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }
    
    // ===== FAQ АККОРДЕОН =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Закрываем все открытые вопросы
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Открываем текущий, если он не был активен
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами для анимации
    const elementsToAnimate = document.querySelectorAll(
        '.step-card, .internship-card, .benefit-card, .faq-item, .story-content'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // ===== ЭФФЕКТ ПАРАЛЛАКСА ДЛЯ HERO =====
    const hero = document.querySelector('.hero');
    const heroIllustration = document.querySelector('.hero-illustration');
    
    if (hero && heroIllustration) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.3;
                heroIllustration.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ===== ПОКАЗ/СКРЫТИЕ HEADER ПРИ СКРОЛЛЕ =====
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(scrollTop - lastScrollTop) < 5) {
            return;
        }
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Скролл вниз - скрываем header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Скролл вверх - показываем header
            header.style.transform = 'translateY(0)';
        }
        
        // Добавляем тень при скролле
        if (scrollTop > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== СЧЕТЧИК ДЛЯ СТАТИСТИКИ =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Запускаем анимацию счетчиков когда они появляются на экране
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    statNumber.classList.add('counted');
                    const text = statNumber.textContent;
                    const number = parseInt(text);
                    
                    if (!isNaN(number)) {
                        statNumber.textContent = '0';
                        animateCounter(statNumber, number);
                    }
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statObserver.observe(item));
    
    // ===== ИНТЕРАКТИВНОСТЬ КАРТОЧЕК СТАЖИРОВОК =====
    const internshipCards = document.querySelectorAll('.internship-card');
    
    internshipCards.forEach(card => {
        const btn = card.querySelector('.btn-outline');
        
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Анимация клика
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
                
                // Здесь можно добавить логику открытия модального окна или перехода на страницу
                console.log('Открыть детали стажировки');
            });
        }
    });
    
    // ===== LAZY LOADING ДЛЯ ИЗОБРАЖЕНИЙ (если будут добавлены) =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===== ЭФФЕКТ RIPPLE ДЛЯ КНОПОК =====
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Стили для ripple эффекта
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== КОПИРОВАНИЕ EMAIL ПРИ КЛИКЕ =====
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Можно добавить копирование в буфер обмена
            const email = this.textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    // Показываем уведомление
                    showNotification('Email скопирован в буфер обмена');
                });
            }
        });
    });
    
    // Функция показа уведомлений
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #2563EB;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Добавляем анимации для уведомлений
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);
    
    // ===== ОБРАБОТКА ФОРМ (если будут добавлены) =====
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить валидацию и отправку данных
            showNotification('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    });
    
    // ===== ПРЕЛОАДЕР (опционально) =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Анимация появления контента
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });
    
    // ===== КНОПКА "НАВЕРХ" =====
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"/>
        </svg>
    `;
    scrollToTopBtn.setAttribute('aria-label', 'Наверх');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563EB;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Показываем/скрываем кнопку при скролле
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Скролл наверх при клике
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover эффект для кнопки "наверх"
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
    });
    
    // ===== КОНСОЛЬНОЕ СООБЩЕНИЕ =====
    console.log('%cЛетний Старт 🚀', 'color: #2563EB; font-size: 24px; font-weight: bold;');
    console.log('%cСтажировки для школьников 8-11 классов', 'color: #60A5FA; font-size: 14px;');
    console.log('%cНайди свою профессию этим летом!', 'color: #374151; font-size: 12px;');
    
});

