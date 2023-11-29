const glasses = document.querySelectorAll('.cup.cup-small');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');

let totalLiters = 0;
let totalGlasses = 0;

glasses.forEach((glass) => {
    glass.addEventListener('click', () => {
        if (!glass.classList.contains('full')) {
            glass.classList.add('full');
            totalLiters += 0.25;
            totalGlasses += 1;
            updateDisplay();
        } else {
            glass.classList.remove('full');
            totalLiters -= 0.25;
            totalGlasses -= 1;
            updateDisplay();
        }
    });
});

function updateDisplay() {
    liters.innerText = totalLiters + 'L';
    percentage.style.height = (totalGlasses / glasses.length) * 100 + '%';
    remained.innerText = (2 - totalLiters).toFixed(2) + 'L Remaining';
}