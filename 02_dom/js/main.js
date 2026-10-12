// console.log(`success!`);

// const mainTitle = document.getElementById(`main-title`);
// console.log(mainTitle);

// const title = document.querySelector(`#main-title`);
// console.dir(title);

// console.log(document.body);
// console.log(document.documentElement);


// const INTRO = document.getElementById(`intro`);
// console.log(INTRO);

// const changeBtn = document.getElementById(`change-btn`);
// console.dir(changeBtn);


// const mainTitle = document.getElementById(`main-title`);
// console.log(mainTitle.textContent);

// const day = 12;
// const week = `monday`;
// mainTitle.textContent = `今日は${day}日の${week}です`;

// const introText = document.querySelector(`#intro`);
// console.log(introText.innerHTML);

// introText.innerHTML = `welcome!<strong>JS</strong>tohere`;


// console.log(document.body.textContent);
// console.log(document.body.innerHTML);


// const mainTitle = document.getElementById(`main-title`);
// mainTitle.textContent = `BOBUR`;

// const INTRO = document.querySelector(`#intro`);
// INTRO.innerHTML = `途中で<br>改行する`;

// const changeBtn = document.getElementById(`change-btn`);
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`;




// changeBtn.addEventListener(`click`, () => {

//     mainTitle.style.color = `#FF3366`;
//     mainTitle.style.backgroundColor = `#333`;
//     let newSize = 90;
//     mainTitle.style.fontSize = `${newSize}px`;

//     INTRO.style.letterSpacing = `1em`;
//     INTRO.style.marginLeft = `200px`;
//     INTRO.style.fontStyle = `italic`;
// });



// 課題

const changeBtn = document.getElementById('btn-light');
const changeBtn1 = document.getElementById('btn-dark');
const changeBtn2 = document.getElementById('btn-cool');
const mainTitle = document.getElementById('theme-title');



changeBtn.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：ライトモード！';
    mainTitle.style.color = '#000';
    document.body.style.backgroundColor = `#e67e11`;
});


changeBtn1.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：ダークモード！';
    mainTitle.style.color = '#909090';
    document.body.style.backgroundColor = `#900900`;
});




changeBtn2.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：クールモード！';
    mainTitle.style.color = '#549000';
    document.body.style.backgroundColor = `#e34587`;
});
