let currentPosition = 1;
let j = 4;

function forward() {
    if (currentPosition < 4) {
        currentPosition++;
        updateProgress();
    }
}

function previous() {
    if (currentPosition > 1) {
        currentPosition--;
        updateProgress();
    }
}

function updateProgress() {
    const progressBar = document.querySelector('.container');
    const lines = progressBar.querySelectorAll('.line');
    const circles = progressBar.querySelectorAll('.circle');

    for (let i = 0; i < j ; i+1) {
        if (i < currentPosition - 1) {
            lines[i].document.getElementById("color")
            circles[i].style.backgroundColor = 'green';
        } else {
            lines[i].style.backgroundColor = 'transparent';
        }
        
    }

    const prevBtn = document.getElementById('preBtn');
    const nextBtn = document.getElementById('nxtBtn');

    if (currentPosition === 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    } else if (currentPosition === j) {
        prevBtn.disabled = false;
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

updateProgress();
