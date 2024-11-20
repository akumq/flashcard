let flashcards = [];
let currentCard = null;
let currentCourse = 'html';
let courseName = 'HTML';

const burgerIcon = document.querySelector('.burger-icon');
const menuList = document.querySelector('.menu-list');
const flashcardEl = document.getElementById('flashcard');
const frontEl = document.getElementById('front');
const backEl = document.getElementById('back');
const loadCardBtn = document.getElementById('load-card');

// Liste de fichiers JSON
const jsonFiles = [
    'chinois-1.json',
    'chinois-2.json',
    'chinois-3.json',
];

// Burger menu functionality
burgerIcon.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

menuList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentCourse = e.target.dataset.course;
        menuList.style.display = 'none';
        loadFlashcards();
    }
});

// Load flashcards
async function loadFlashcards() {
    try {
        const response = await fetch(`ressources/flashcards/${currentCourse}.json`);
        const data = await response.json();
        flashcards = data.flashcards;
        courseName = data.courseName;
        loadRandomCard();
    } catch (error) {
        console.error('Error loading flashcards:', error);
        flashcards = [];
    }
}

// Display random flashcard
function loadRandomCard() {
    if (flashcards.length === 0) return;

    currentCard = flashcards[Math.floor(Math.random() * flashcards.length)];
    frontEl.textContent = `${currentCard.question}`;
    backEl.textContent = currentCard.answer;
    flashcardEl.classList.remove('flipped');
}

// Load course options
async function loadCourseOptions() {
    jsonFiles.forEach(async file => {
        const courseName = file.replace('.json', '');
        const response = await fetch(`ressources/flashcards/${courseName}.json`);
        const data = await response.json();
        const menuItem = document.createElement('li');
        menuItem.dataset.course = courseName;
        menuItem.textContent = data.courseName;
        menuList.appendChild(menuItem);
    });
}

// Event listeners
flashcardEl.addEventListener('click', () => {
    flashcardEl.classList.toggle('flipped');
});

loadCardBtn.addEventListener('click', loadRandomCard);

// Initialize
loadCourseOptions();
loadFlashcards();
