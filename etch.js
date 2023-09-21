const container = document.querySelector('.container');
const gridButton = document.querySelector('.grid');

container.style.cssText = 'display: flex; flex-direction: column; max-width: 400px; max-height: 400px;'

gridButton.addEventListener('click', drawGrid);



function getUserInput(){

    let userInput;

    do {
    userInput = prompt('Please enter a number less than or equal to 100:');
    userInput = parseFloat(userInput); 
    
    if (isNaN(userInput)) {
        alert('Please enter a valid number.');
    } else if (userInput > 100) {
        alert('Number exceeds the limit of 100. Please try again.');
    }
    } while (isNaN(userInput) || userInput > 100);

    return userInput;
};


// recursively clear container row and square
function clearContainerElement(containerElement) {
    if (containerElement.hasChildNodes()) {
        const containerChildRows = containerElement.children;

        for (let i = containerChildRows.length - 1; i >= 0; i--) {
        const containerChildRow = containerChildRows[i];
        
        if (containerChildRow.hasChildNodes()) {
            const rowChildren = containerChildRow.children;

            for (let j = rowChildren.length - 1; j >= 0; j--) {
            const rowChild = rowChildren[j];
            containerChildRow.removeChild(rowChild);
            }
        }

        containerElement.removeChild(containerChildRow);
        }
    }
};



function applyRandomBackgroundColor(element) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    
    element.style.backgroundColor = rgbColor;

};


// recursively add row and square based on user input number
function addRowSquareDiv(userInput){
    
    for (let i = 0; i < userInput; i++){

        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display: flex;';


        for (let j =0; j < userInput; j++){
            
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.cssText = 'flex: 1; width: 100px; height: 100px; background-color: blue; border: 1px solid #8b8589;';
            
            
            
            square.addEventListener('mouseenter', ()=>{
                applyBackgroundColor(square);
            });

            square.addEventListener('mouseout', () => {
                square.style.backgroundColor = 'blue';
            });

            row.appendChild(square);

        }

        container.appendChild(row);
        
    }
};



function drawGrid(){

    let userInput = getUserInput();

    clearContainerElement(container);
    addRowSquareDiv(userInput);


};






