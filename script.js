// =====================================================
// INTERN - JAVASCRIPT (FULL FEATURED)
// =====================================================

// ===== DATA =====
const internshipsData = [
    {
        id: 1,
        title: "UX/UI Дизайн мобильных приложений",
        company: "VK",
        category: "design",
        industry: "tech",
        description: "Создай интерфейс мессенджера и научись думать как продуктовый дизайнер",
        location: "Москва/Онлайн",
        duration: "3 недели",
        age: "14-17 лет",
        deadline: "2025-06-01",
        popular: true,
        tags: ["Дизайн", "Mobile", "Figma"]
    },
    {
        id: 2,
        title: "Frontend разработка",
        company: "Яндекс",
        category: "it",
        industry: "tech",
        description: "Создай реальную веб-страницу сервиса Яндекса под руководством опытных разработчиков",
        location: "Москва",
        duration: "4 недели",
        age: "15-17 лет",
        deadline: "2025-05-25",
        popular: true,
        tags: ["JavaScript", "React", "HTML/CSS"]
    },
    {
        id: 3,
        title: "Digital-маркетинг и SMM",
        company: "Wildberries",
        category: "marketing",
        industry: "retail",
        description: "Запусти рекламную кампанию и узнай секреты продвижения в соцсетях",
        location: "Онлайн",
        duration: "2 недели",
        age: "14-17 лет",
        deadline: "2025-06-10",
        popular: false,
        tags: ["SMM", "Реклама", "Аналитика"]
    },
    {
        id: 4,
        title: "Биоинженерия и нанотехнологии",
        company: "Росатом",
        category: "engineering",
        industry: "energy",
        description: "Работай в лаборатории и открой мир физики и современных инноваций",
        location: "Москва",
        duration: "4 недели",
        age: "15-17 лет",
        deadline: "2025-05-20",
        popular: true,
        tags: ["Физика", "Наука", "Лаборатория"]
    },
    {
        id: 5,
        title: "Python разработка",
        company: "Сбер",
        category: "it",
        industry: "finance",
        description: "Создай мобильное приложение и стань частью IT-команды крупнейшего банка",
        location: "Москва/Онлайн",
        duration: "3 недели",
        age: "15-17 лет",
        deadline: "2025-06-05",
        popular: true,
        tags: ["Python", "Backend", "API"]
    },
    {
        id: 6,
        title: "Графический дизайн",
        company: "Ozon",
        category: "design",
        industry: "retail",
        description: "Создавай визуалы для маркетинговых кампаний и изучи Adobe Creative Suite",
        location: "Онлайн",
        duration: "2 недели",
        age: "14-17 лет",
        deadline: "2025-06-15",
        popular: false,
        tags: ["Adobe", "Иллюстрация", "Брендинг"]
    },
    {
        id: 7,
        title: "Data Science и аналитика",
        company: "МТС",
        category: "it",
        industry: "tech",
        description: "Анализируй большие данные и создавай предиктивные модели",
        location: "Москва",
        duration: "3 недели",
        age: "16-17 лет",
        deadline: "2025-05-28",
        popular: true,
        tags: ["Python", "ML", "Данные"]
    },
    {
        id: 8,
        title: "Контент-маркетинг",
        company: "Авито",
        category: "marketing",
        industry: "tech",
        description: "Создавай контент для блога и соцсетей, учись писать цепляющие тексты",
        location: "Онлайн",
        duration: "2 недели",
        age: "14-17 лет",
        deadline: "2025-06-12",
        popular: false,
        tags: ["Копирайтинг", "SEO", "Контент"]
    },
    {
        id: 9,
        title: "Робототехника",
        company: "РЖД",
        category: "engineering",
        industry: "other",
        description: "Программируй роботов и изучай автоматизацию производственных процессов",
        location: "Москва",
        duration: "3 недели",
        age: "15-17 лет",
        deadline: "2025-05-30",
        popular: false,
        tags: ["Робототехника", "Arduino", "C++"]
    },
    {
        id: 10,
        title: "Product Management",
        company: "Тинькофф",
        category: "other",
        industry: "finance",
        description: "Узнай, как создаются продукты в финтехе, работай с реальными командами",
        location: "Москва/Онлайн",
        duration: "3 недели",
        age: "16-17 лет",
        deadline: "2025-06-03",
        popular: true,
        tags: ["Продукт", "Менеджмент", "Agile"]
    },
    {
        id: 11,
        title: "3D-моделирование",
        company: "Mail.ru Group",
        category: "design",
        industry: "tech",
        description: "Создавай 3D-модели для игр и VR-приложений в Blender",
        location: "Онлайн",
        duration: "2 недели",
        age: "14-17 лет",
        deadline: "2025-06-08",
        popular: false,
        tags: ["3D", "Blender", "Игры"]
    },
    {
        id: 12,
        title: "DevOps и облачные технологии",
        company: "Яндекс Облако",
        category: "it",
        industry: "tech",
        description: "Настраивай серверы, автоматизируй деплой, изучай Docker и Kubernetes",
        location: "Онлайн",
        duration: "3 недели",
        age: "16-17 лет",
        deadline: "2025-05-27",
        popular: false,
        tags: ["DevOps", "Docker", "Cloud"]
    }
];

const companiesData = [
    { id: 1, name: "Яндекс", industry: "tech", count: 8, initial: "Я" },
    { id: 2, name: "VK", industry: "tech", count: 6, initial: "V" },
    { id: 3, name: "Сбер", industry: "finance", count: 12, initial: "С" },
    { id: 4, name: "Тинькофф", industry: "finance", count: 5, initial: "Т" },
    { id: 5, name: "Wildberries", industry: "retail", count: 4, initial: "W" },
    { id: 6, name: "Ozon", industry: "retail", count: 7, initial: "O" },
    { id: 7, name: "Росатом", industry: "energy", count: 3, initial: "Р" },
    { id: 8, name: "МТС", industry: "tech", count: 9, initial: "М" }
];

const storiesData = [
    {
        quote: "В лаборатории Росатома я понял: хочу стать физиком! Работал с реальным оборудованием, встречался с учеными. Это было незабываемо!",
        author: "Иван, 10 класс, Москва"
    },
    {
        quote: "Стажировка в VK изменила мою жизнь. Я создала дизайн фичи, которая теперь используется миллионами. Это круто!",
        author: "Мария, 11 класс, Санкт-Петербург"
    },
    {
        quote: "Программирование в Яндексе — это не просто код. Я научился работать в команде, делать код-ревью и думать как инженер.",
        author: "Артём, 11 класс, Казань"
    },
    {
        quote: "В Сбере я поняла, что банки — это не скучно! Data Science, ML, аналитика — мир возможностей для молодых специалистов.",
        author: "Анна, 10 класс, Москва"
    }
];

const faqData = [
    {
        question: "Как подать заявку на стажировку?",
        answer: "Выбери интересную стажировку из каталога, нажми кнопку 'Подать заявку' и заполни короткую форму. Укажи свои интересы, класс и почему хочешь попасть именно в эту компанию. Заявка рассматривается 3-5 дней, после чего мы свяжемся с тобой."
    },
    {
        question: "Платят ли стипендию за стажировку?",
        answer: "Стажировки бесплатные и не оплачиваются — это образовательная программа для знакомства с профессией. Зато ты получишь ценный опыт, сертификат от компании, менторство от профессионалов и новые знакомства в индустрии!"
    },
    {
        question: "Можно участвовать из регионов?",
        answer: "Да! Многие стажировки проходят полностью онлайн. Для офлайн-программ в Москве, Санкт-Петербурге и других городах нужно будет приехать на место. Некоторые компании помогают с организацией проживания для иногородних."
    },
    {
        question: "Нужны ли какие-то особые навыки?",
        answer: "Нет! Стажировки созданы специально для знакомства с профессией. Главное — искренний интерес и желание учиться. Компании сами обучат тебя всему необходимому. В некоторых случаях могут быть базовые требования (например, знание основ программирования), но это всегда указано в описании."
    },
    {
        question: "Сколько времени занимает стажировка?",
        answer: "От 2 до 4 недель, в зависимости от программы. Обычно это 3-4 часа в день, 5 дней в неделю, чтобы у тебя оставалось время на отдых и другие дела. Точное расписание и формат (полный/неполный день) указаны в описании каждой стажировки."
    },
    {
        question: "Получу ли я сертификат?",
        answer: "Да! Все участники, успешно завершившие стажировку, получают сертификат от компании. Этот документ можно использовать при поступлении в вуз, в портфолио и при устройстве на работу. Некоторые компании также дают рекомендательные письма."
    },
    {
        question: "Могу ли я пройти несколько стажировок?",
        answer: "Да, можешь подавать заявки на несколько стажировок одновременно. Однако мы рекомендуем сначала завершить одну программу, чтобы получить максимум от опыта, а затем пробовать другие направления."
    },
    {
        question: "Что делать, если меня не выбрали?",
        answer: "Не расстраивайся! Конкуренция высокая, но это не значит, что ты недостаточно хорош. Попробуй подать заявку в другие компании, улучши свое резюме или попроси фидбэк у нашей команды поддержки. Мы поможем тебе подготовиться лучше!"
    }
];

const quizQuestions = [
    {
        question: "Что тебе интереснее?",
        options: [
            { text: "Создавать красивые интерфейсы и работать с визуалом", categories: ["design"] },
            { text: "Писать код и создавать программы", categories: ["it"] },
            { text: "Продвигать продукты и работать с людьми", categories: ["marketing"] },
            { text: "Работать с техникой и инженерными решениями", categories: ["engineering"] }
        ]
    },
    {
        question: "Какой формат работы тебе ближе?",
        options: [
            { text: "Онлайн, хочу работать из дома", remote: true },
            { text: "Офлайн, хочу быть в офисе компании", remote: false },
            { text: "Гибридный, иногда онлайн, иногда офлайн", remote: null }
        ]
    },
    {
        question: "Сколько времени готов уделять стажировке?",
        options: [
            { text: "2 недели, хочу попробовать быстро", duration: "2 недели" },
            { text: "3 недели, оптимальный вариант", duration: "3 недели" },
            { text: "4 недели, хочу глубоко погрузиться", duration: "4 недели" }
        ]
    },
    {
        question: "Что для тебя важнее?",
        options: [
            { text: "Работать в известной крупной компании", size: "large" },
            { text: "Получить практические навыки", practical: true },
            { text: "Познакомиться с профессионалами", networking: true },
            { text: "Понять, подходит ли мне эта сфера", exploration: true }
        ]
    },
    {
        question: "Твой уровень подготовки:",
        options: [
            { text: "Новичок, хочу попробовать с нуля", level: "beginner" },
            { text: "Есть базовые знания, хочу развиваться", level: "intermediate" },
            { text: "Уже занимаюсь этим, хочу практику", level: "advanced" }
        ]
    }
];

// ===== STATE =====
let currentInternships = [...internshipsData];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentTab = 'all';
let currentView = 'grid';
let currentSort = 'newest';
let currentStory = 0;
let quizAnswers = [];
let currentQuizQuestion = 0;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== INITIALIZATION =====
function initializeApp() {
    // Theme
    initTheme();
    
    // Mobile menu
    initMobileMenu();
    
    // Search
    initSearch();
    
    // Tabs
    initTabs();
    
    // Internships
    renderInternships();
    
    // Companies
    renderCompanies();
    
    // Quiz
    initQuiz();
    
    // Stories carousel
    initStoriesCarousel();
    
    // FAQ
    initFAQ();
    
    // View toggle
    initViewToggle();
    
    // Sort
    initSort();
    
    // Load more
    initLoadMore();
    
    // Modals
    initModals();
    
    // Scroll to top
    initScrollToTop();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Stats animation
    animateStats();
    
    // Ticker duplicate
    duplicateTicker();
}

// ===== THEME =====
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    themeToggle?.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        showNotification('Тема изменена', 'info');
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    toggle?.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close on link click
    nav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle?.classList.remove('active');
        });
    });
}

// ===== SEARCH =====
function initSearch() {
    const searchInput = document.getElementById('heroSearch');
    const searchResults = document.getElementById('searchResults');
    
    searchInput?.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const results = internshipsData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.company.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        if (results.length > 0) {
            searchResults.innerHTML = results.slice(0, 5).map(item => `
                <div class="search-result-item" onclick="scrollToInternship(${item.id})">
                    <strong>${item.title}</strong>
                    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 4px;">
                        ${item.company} · ${item.location}
                    </div>
                </div>
            `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
            searchResults.classList.add('active');
        }
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
        if (!searchInput?.contains(e.target) && !searchResults?.contains(e.target)) {
            searchResults?.classList.remove('active');
        }
    });
}

function scrollToInternship(id) {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('internships').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        const card = document.querySelector(`[data-internship-id="${id}"]`);
        card?.classList.add('highlight');
        setTimeout(() => card?.classList.remove('highlight'), 2000);
    }, 500);
}

// ===== TABS =====
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentTab = this.dataset.tab;
            filterInternships();
        });
    });
}

function filterInternships() {
    if (currentTab === 'all') {
        currentInternships = [...internshipsData];
    } else {
        currentInternships = internshipsData.filter(item => item.category === currentTab);
    }
    
    sortInternships();
    renderInternships();
}

// ===== RENDER INTERNSHIPS =====
function renderInternships() {
    const grid = document.getElementById('internshipsGrid');
    if (!grid) return;
    
    grid.className = `internships-grid ${currentView === 'list' ? 'list-view' : ''}`;
    
    const html = currentInternships.slice(0, 12).map(item => `
        <div class="internship-card" data-internship-id="${item.id}">
            <div class="internship-header">
                <div class="company-badge">${item.company}</div>
                <button class="favorite-btn ${favorites.includes(item.id) ? 'active' : ''}" 
                        onclick="toggleFavorite(${item.id})"
                        aria-label="Добавить в избранное">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${favorites.includes(item.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <h3 class="internship-title">${item.title}</h3>
            <div class="internship-company">${item.company}</div>
            <p class="internship-description">${item.description}</p>
            <div class="internship-tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="internship-footer">
                <div class="internship-deadline">До ${new Date(item.deadline).toLocaleDateString('ru')}</div>
                <button class="btn btn-primary btn-small" onclick="openApplyModal(${item.id})">
                    Подать заявку
                </button>
            </div>
        </div>
    `).join('');
    
    grid.innerHTML = html;
    
    // Update counter
    document.getElementById('currentCount').textContent = Math.min(12, currentInternships.length);
    document.getElementById('totalCount').textContent = currentInternships.length;
}

// ===== FAVORITES =====
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        showNotification('Удалено из избранного', 'info');
    } else {
        favorites.push(id);
        showNotification('Добавлено в избранное', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderInternships();
}

// ===== VIEW TOGGLE =====
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            renderInternships();
        });
    });
}

// ===== SORT =====
function initSort() {
    const sortSelect = document.getElementById('sortSelect');
    
    sortSelect?.addEventListener('change', function() {
        currentSort = this.value;
        sortInternships();
        renderInternships();
    });
}

function sortInternships() {
    switch (currentSort) {
        case 'newest':
            currentInternships.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
            break;
        case 'popular':
            currentInternships.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
            break;
        case 'deadline':
            currentInternships.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
            break;
        case 'duration':
            currentInternships.sort((a, b) => {
                const durationA = parseInt(a.duration);
                const durationB = parseInt(b.duration);
                return durationA - durationB;
            });
            break;
    }
}

// ===== LOAD MORE =====
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    
    loadMoreBtn?.addEventListener('click', function() {
        showNotification('Все стажировки загружены!', 'info');
    });
}

// ===== COMPANIES =====
function renderCompanies() {
    const grid = document.getElementById('companiesGrid');
    if (!grid) return;
    
    let displayCompanies = [...companiesData];
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.companies-filter .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const industry = this.dataset.industry;
            if (industry === 'all') {
                displayCompanies = [...companiesData];
            } else {
                displayCompanies = companiesData.filter(c => c.industry === industry);
            }
            
            renderCompanyCards();
        });
    });
    
    function renderCompanyCards() {
        grid.innerHTML = displayCompanies.map(company => `
            <div class="company-card" onclick="filterByCompany('${company.name}')">
                <div class="company-logo-placeholder">${company.initial}</div>
                <div class="company-name">${company.name}</div>
                <div class="company-count">${company.count} стажировок</div>
            </div>
        `).join('');
    }
    
    renderCompanyCards();
}

function filterByCompany(companyName) {
    currentInternships = internshipsData.filter(item => item.company === companyName);
    document.getElementById('internships').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => renderInternships(), 300);
    showNotification(`Показаны стажировки в ${companyName}`, 'info');
}

// ===== QUIZ =====
function initQuiz() {
    renderQuizQuestion();
    
    document.getElementById('quizNext')?.addEventListener('click', nextQuizQuestion);
    document.getElementById('quizPrev')?.addEventListener('click', prevQuizQuestion);
}

function renderQuizQuestion() {
    const questionContainer = document.getElementById('quizQuestion');
    const progressFill = document.getElementById('quizProgress');
    const currentQuestionEl = document.getElementById('currentQuestion');
    
    if (!questionContainer) return;
    
    const question = quizQuestions[currentQuizQuestion];
    const progress = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
    
    progressFill.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuizQuestion + 1;
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <div class="quiz-options">
            ${question.options.map((option, index) => `
                <button class="quiz-option ${quizAnswers[currentQuizQuestion] === index ? 'selected' : ''}" 
                        onclick="selectQuizOption(${index})">
                    ${option.text}
                </button>
            `).join('')}
        </div>
    `;
    
    // Update buttons
    document.getElementById('quizPrev').disabled = currentQuizQuestion === 0;
    document.getElementById('quizNext').textContent = 
        currentQuizQuestion === quizQuestions.length - 1 ? 'Получить результат' : 'Далее';
}

function selectQuizOption(index) {
    quizAnswers[currentQuizQuestion] = index;
    renderQuizQuestion();
}

function nextQuizQuestion() {
    if (quizAnswers[currentQuizQuestion] === undefined) {
        showNotification('Выбери вариант ответа', 'error');
        return;
    }
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
        currentQuizQuestion++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function prevQuizQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        renderQuizQuestion();
    }
}

function showQuizResults() {
    // Analyze answers
    const categories = { design: 0, it: 0, marketing: 0, engineering: 0 };
    
    quizAnswers.forEach((answerIndex, questionIndex) => {
        const answer = quizQuestions[questionIndex].options[answerIndex];
        if (answer.categories) {
            answer.categories.forEach(cat => categories[cat]++);
        }
    });
    
    const topCategory = Object.keys(categories).reduce((a, b) => 
        categories[a] > categories[b] ? a : b
    );
    
    const recommendations = internshipsData
        .filter(item => item.category === topCategory)
        .slice(0, 3);
    
    const categoryNames = {
        design: 'Дизайн',
        it: 'IT & Tech',
        marketing: 'Маркетинг',
        engineering: 'Инженерия'
    };
    
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    document.getElementById('quizResults').innerHTML = `
        <div style="text-align: center; padding: 48px;">
            <h2 style="font-size: 48px; margin-bottom: 24px;">🎉</h2>
            <h3 style="font-size: 32px; margin-bottom: 16px;">Тебе подойдет:</h3>
            <div style="font-size: 48px; color: var(--color-primary); font-weight: 700; margin-bottom: 48px;">
                ${categoryNames[topCategory]}
            </div>
            <h4 style="font-size: 24px; margin-bottom: 32px;">Рекомендуемые стажировки:</h4>
            <div style="display: grid; gap: 24px; text-align: left; max-width: 600px; margin: 0 auto 32px;">
                ${recommendations.map(item => `
                    <div style="border: 3px solid var(--color-border); padding: 24px;">
                        <div style="font-weight: 700; font-size: 20px; margin-bottom: 8px;">${item.title}</div>
                        <div style="color: var(--color-text-secondary); margin-bottom: 12px;">${item.company}</div>
                        <button class="btn btn-primary" onclick="openApplyModal(${item.id})">Подать заявку</button>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-outline" onclick="resetQuiz()">Пройти тест заново</button>
        </div>
    `;
}

function resetQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = [];
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    renderQuizQuestion();
}

// ===== STORIES CAROUSEL =====
function initStoriesCarousel() {
    const carousel = document.getElementById('storiesCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carousel) return;
    
    // Render stories
    carousel.innerHTML = storiesData.map((story, index) => `
        <div class="story-card ${index === 0 ? 'active' : ''}">
            <div class="story-content">
                <blockquote class="story-quote">"${story.quote}"</blockquote>
                <div class="story-author">— ${story.author}</div>
            </div>
        </div>
    `).join('');
    
    // Render dots
    dotsContainer.innerHTML = storiesData.map((_, index) => `
        <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToStory(${index})"></div>
    `).join('');
    
    // Navigation
    document.getElementById('prevStory')?.addEventListener('click', () => {
        currentStory = (currentStory - 1 + storiesData.length) % storiesData.length;
        updateCarousel();
    });
    
    document.getElementById('nextStory')?.addEventListener('click', () => {
        currentStory = (currentStory + 1) % storiesData.length;
        updateCarousel();
    });
    
    // Auto-rotate
    setInterval(() => {
        currentStory = (currentStory + 1) % storiesData.length;
        updateCarousel();
    }, 5000);
}

function updateCarousel() {
    const cards = document.querySelectorAll('.story-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentStory);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStory);
    });
}

function goToStory(index) {
    currentStory = index;
    updateCarousel();
}

// ===== FAQ =====
function initFAQ() {
    const faqList = document.getElementById('faqList');
    const faqSearch = document.getElementById('faqSearch');
    
    if (!faqList) return;
    
    function renderFAQ(items = faqData) {
        faqList.innerHTML = items.map((item, index) => `
            <div class="faq-item" data-faq-index="${index}">
                <button class="faq-question">
                    <span>${item.question}</span>
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
        
        // Add event listeners
        faqList.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.faq-item');
                const wasActive = item.classList.contains('active');
                
                // Close all
                faqList.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                
                // Toggle current
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    renderFAQ();
    
    // Search
    faqSearch?.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            renderFAQ();
            return;
        }
        
        const filtered = faqData.filter(item => 
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        );
        
        renderFAQ(filtered);
    });
}

// ===== MODALS =====
function initModals() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modalClose');
    
    // Open modal buttons
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', function() {
            const modalType = this.dataset.modal;
            openModal(modalType);
        });
    });
    
    // Close modal
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(type, data = {}) {
    const overlay = document.getElementById('modalOverlay');
    const content = document.getElementById('modalContent');
    
    let html = '';
    
    switch (type) {
        case 'apply':
            html = getApplyModalHTML(data);
            break;
        case 'login':
            html = getLoginModalHTML();
            break;
        case 'filter':
            html = getFilterModalHTML();
            break;
        case 'feedback':
            html = getFeedbackModalHTML();
            break;
    }
    
    content.innerHTML = html;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize form validation
    initFormValidation();
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openApplyModal(internshipId) {
    const internship = internshipsData.find(i => i.id === internshipId);
    openModal('apply', internship);
}

// ===== MODAL TEMPLATES =====
function getApplyModalHTML(internship) {
    return `
        <h2 class="modal-title">Подать заявку</h2>
        ${internship ? `<p style="margin-bottom: 24px; color: var(--color-text-secondary);">
            <strong>${internship.title}</strong> в ${internship.company}
        </p>` : ''}
        <form id="applyForm" onsubmit="handleApplySubmit(event)">
            <div class="form-group">
                <label class="form-label">Имя и фамилия *</label>
                <input type="text" class="form-input" name="name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email *</label>
                <input type="email" class="form-input" name="email" required>
            </div>
            <div class="form-group">
                <label class="form-label">Телефон *</label>
                <input type="tel" class="form-input" name="phone" required>
            </div>
            <div class="form-group">
                <label class="form-label">Класс *</label>
                <select class="form-select" name="grade" required>
                    <option value="">Выбери класс</option>
                    <option value="8">8 класс</option>
                    <option value="9">9 класс</option>
                    <option value="10">10 класс</option>
                    <option value="11">11 класс</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Почему хочешь попасть на эту стажировку? *</label>
                <textarea class="form-textarea" name="motivation" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
                Отправить заявку
            </button>
        </form>
    `;
}

function getLoginModalHTML() {
    return `
        <h2 class="modal-title">Вход</h2>
        <form id="loginForm" onsubmit="handleLoginSubmit(event)">
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" name="email" required>
            </div>
            <div class="form-group">
                <label class="form-label">Пароль</label>
                <input type="password" class="form-input" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
                Войти
            </button>
            <p style="text-align: center; margin-top: 16px; color: var(--color-text-secondary);">
                Нет аккаунта? <a href="#" style="color: var(--color-primary); font-weight: 600;">Зарегистрироваться</a>
            </p>
        </form>
    `;
}

function getFilterModalHTML() {
    return `
        <h2 class="modal-title">Фильтры</h2>
        <form id="filterForm" onsubmit="handleFilterSubmit(event)">
            <div class="form-group">
                <label class="form-label">Компания</label>
                <select class="form-select" name="company">
                    <option value="">Все компании</option>
                    ${[...new Set(internshipsData.map(i => i.company))].map(c => 
                        `<option value="${c}">${c}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Локация</label>
                <select class="form-select" name="location">
                    <option value="">Все локации</option>
                    <option value="Москва">Москва</option>
                    <option value="Онлайн">Онлайн</option>
                    <option value="Москва/Онлайн">Москва/Онлайн</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Длительность</label>
                <select class="form-select" name="duration">
                    <option value="">Любая</option>
                    <option value="2">2 недели</option>
                    <option value="3">3 недели</option>
                    <option value="4">4 недели</option>
                </select>
            </div>
            <div style="display: flex; gap: 16px;">
                <button type="submit" class="btn btn-primary" style="flex: 1;">
                    Применить
                </button>
                <button type="button" class="btn btn-outline" onclick="resetFilters()" style="flex: 1;">
                    Сбросить
                </button>
            </div>
        </form>
    `;
}

function getFeedbackModalHTML() {
    return `
        <h2 class="modal-title">Обратная связь</h2>
        <form id="feedbackForm" onsubmit="handleFeedbackSubmit(event)">
            <div class="form-group">
                <label class="form-label">Имя *</label>
                <input type="text" class="form-input" name="name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email *</label>
                <input type="email" class="form-input" name="email" required>
            </div>
            <div class="form-group">
                <label class="form-label">Сообщение *</label>
                <textarea class="form-textarea" name="message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
                Отправить
            </button>
        </form>
    `;
}

// ===== FORM HANDLERS =====
function handleApplySubmit(e) {
    e.preventDefault();
    closeModal();
    showNotification('Заявка отправлена! Мы свяжемся с тобой в течение 3-5 дней', 'success');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    closeModal();
    showNotification('Вход выполнен успешно!', 'success');
}

function handleFilterSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = Object.fromEntries(formData);
    
    currentInternships = internshipsData.filter(item => {
        if (filters.company && item.company !== filters.company) return false;
        if (filters.location && !item.location.includes(filters.location)) return false;
        if (filters.duration && !item.duration.includes(filters.duration)) return false;
        return true;
    });
    
    renderInternships();
    closeModal();
    showNotification('Фильтры применены', 'success');
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    closeModal();
    showNotification('Спасибо за обратную связь! Мы обязательно с тобой свяжемся', 'success');
}

function resetFilters() {
    currentInternships = [...internshipsData];
    renderInternships();
    closeModal();
    showNotification('Фильтры сброшены', 'info');
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    });
}

function validateField(field) {
    const errorEl = field.parentElement.querySelector('.form-error');
    
    if (field.validity.valid) {
        field.classList.remove('error');
        if (errorEl) errorEl.remove();
        return true;
    } else {
        field.classList.add('error');
        if (!errorEl) {
            const error = document.createElement('div');
            error.className = 'form-error';
            error.textContent = field.validationMessage;
            field.parentElement.appendChild(error);
        }
        return false;
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollBtn?.classList.add('visible');
        } else {
            scrollBtn?.classList.remove('visible');
        }
    });
    
    scrollBtn?.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.includes('privacy') || href.includes('terms') || href.includes('cookies')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== STATS ANIMATION =====
function animateStats() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const targetValue = parseInt(statValue.dataset.count);
                
                if (targetValue) {
                    animateCounter(statValue, targetValue);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-value[data-count]').forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ===== TICKER DUPLICATE =====
function duplicateTicker() {
    const ticker = document.querySelector('.stats-ticker');
    if (ticker) {
        const items = ticker.innerHTML;
        ticker.innerHTML = items + items;
    }
}

// ===== UTILITY =====
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

// ===== CONSOLE MESSAGE =====
console.log('%cintern 🚀', 'color: #2563EB; font-size: 32px; font-weight: bold;');
console.log('%cПлатформа стажировок для школьников', 'color: #10B981; font-size: 16px;');
console.log('%cНайди стажировку своей мечты!', 'color: #6B7280; font-size: 14px;');
