//----get btns so you can apply the flex change ----//
const spaceEvenBtn = document.getElementById('space-even-btn');
const spaceAroundBtn = document.getElementById('space-around-btn');
const spaceBetweenBtn = document.getElementById('space-between-btn');
const flexStartBtn = document.getElementById('flex-start-btn');
const flexEndBtn = document.getElementById('flex-end-btn');
const boxContainer = document.getElementById('box-container');
const circleContainer = document.querySelector('.circle-container');
const rowBtn = document.getElementById('row-btn');
const columnBtn = document.getElementById('column-btn');


////Space Evenly Button
spaceEvenBtn.addEventListener('click', () => {
    console.log('space evenly clicked');
    boxContainer.style.justifyContent = 'space-evenly';
})
///Space Around Button
spaceAroundBtn.addEventListener('click', () => {
    console.log('space around clicked!')

    // const boxContainer = document.querySelector('.box-container');
    console.log(boxContainer)
    boxContainer.style.justifyContent = 'space-around';
})

//space between button
spaceBetweenBtn.addEventListener('click', () => {
    console.log('space between clicked')
    boxContainer.style.justifyContent = 'space-between';
})

//flex start button
flexStartBtn.addEventListener('click', () => {
    console.log('flex start clicked')
    boxContainer.style.justifyContent = 'flex-start';
})

//flex end button
flexEndBtn.addEventListener('click', () => {
    console.log('flex end clicked')
    boxContainer.style.justifyContent = 'flex-end';
})


rowBtn.addEventListener('click', () => {
    circleContainer.style.flexDirection = 'row';
})

columnBtn.addEventListener('click', () => {
    circleContainer.style.flexDirection = 'column';
})
