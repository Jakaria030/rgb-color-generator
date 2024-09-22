
// rgb color generate function
const generateRGBColor = () => {
    const r = Math.floor(256 * Math.random());
    const g = Math.floor(256 * Math.random());
    const b = Math.floor(256 * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
}

// update color function
const updateColor = () => {
    const color = generateRGBColor();

    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");

    colorBox.style.backgroundColor = color;
    colorCode.innerText = color;
}

// copy color code function
const copyColorCode = () => {
    const colorCode = document.getElementById("color-code");
    const inputTag = document.createElement("input");
    document.getElementById("container").appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand("copy");
    document.getElementById("container").removeChild(inputTag);
    
    alert(`${colorCode.innerText} color is copied.`);
}

// copy event listener
document.getElementById("copy-button").addEventListener("click", () => {
    copyColorCode();
});

// generate new color
document.getElementById("generate-new-color").addEventListener("click", () => {
    updateColor();
});


