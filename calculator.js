// ============== THEME TOGGLE FUNCTIONALITY ==============

const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved theme or use default
const savedTheme = localStorage.getItem('calculator-theme') || 'light';

// Apply saved theme on page load
if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme function
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('calculator-theme', 'light');
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('calculator-theme', 'dark');
    }
}

// Add click event to toggle button
themeToggleBtn.addEventListener('click', toggleTheme);




const display = document.getElementById('display');


function displayKey(input) {
    if (display.value === '0' || display.value === 'error') {
        display.value = input;
    } else {
        display.value += input;
    }
}

function displayClear(){
    
    display.value = '0';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'error';
    }   
}

function displayRemove() {
    // Remove last character
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}