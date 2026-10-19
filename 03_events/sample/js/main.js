console.log("success");

const btn = document.getElementById(`btn`);
const mainTitle = document.querySelector(`#main-title`);

btn.addEventListener(`click`, () => {
    mainTitle.textContent = 'クリックされました';
    mainTitle.style.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    console.log(`現在のスクロール:${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

/*
window.addEventListener(`DOMContentLoaded`, () => { });
*/


window.addEventListener(`load`, () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
})

// const windowWidth = document.getElementById(`window-width`);
// const windowHeight = document.getElementById(`window-height`);

// windowWidth.textContent = window.innerWidth;
// windowHeight.textContent = window.innerHeight;


// window.addEventListener(`resize`, () => {
//     // console.log(`現在のブラウザ幅:${window.innerWidth}px`);
//     windowWidth.textContent = window.innerWidth;
//     windowHeight.textContent = window.innerHeight;
// });

const sizeDisplay = document.getElementById(`size-display`);
window.addEventListener(`resize`, () => {
    sizeDisplay.textContent = `現在の画面サイズ:${window.innerWidth}px × ${window.innerHeight}px`;
    mainTitle.style.fontSize = `/25`;
})


btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = `textbtn changed`;
    } else {
        btn.textContent = `No changed`;
    }
});
