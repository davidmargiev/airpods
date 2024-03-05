const colors = new Map([
    ["blue","visible"],
    ["green","hidden"],
    ["red","visible"],
    ["white","visible"],
    ["black","visible"]
]); 

function changeColor(colors, currentColor, colorGradient, blurColor){
    for(let color of colors.keys()){
        if(colors.get(color) == "hidden"){
            colors.set(color, "visible");
            document.getElementById(color).style.display = 'inline-block';
            document.getElementById('background__image').src = `./images/airpods-${currentColor}.png`;
            document.getElementById('gradient').style.background = colorGradient;
            document.getElementById('composition').src = `./images/composition-${currentColor}.jpeg`;
            document.getElementById('case').src = `./images/case-${currentColor}.jpeg`;
            document.getElementById('blur').style.background = blurColor;
        }
    }
    document.getElementById('header').scrollIntoView();
    colors.set(currentColor, "hidden");
    document.getElementById(currentColor).style.display = 'none';
}

blue.addEventListener("click", () => { changeColor(colors, 'blue', 'linear-gradient(180.00deg, rgb(202, 219, 235),rgba(235, 235, 235, 0) 100%)','rgb(211, 225, 237)' ) })
black.addEventListener("click", () => { changeColor(colors, 'black', 'linear-gradient(180.00deg, rgb(182, 182, 182),rgba(235, 235, 235, 0) 100%)','rgb(197, 197, 197)') })
green.addEventListener("click", () => { changeColor(colors, 'green', 'linear-gradient(180.00deg, rgb(221, 234, 217),rgba(235, 235, 235, 0) 100%)','rgb(225, 236, 222)') })
red.addEventListener("click", () => { changeColor(colors, 'red', 'linear-gradient(180.00deg, rgb(243, 214, 209),rgba(235, 235, 235, 0) 100%)', 'rgb(243, 214, 209)') })
white.addEventListener("click", () => { changeColor(colors, 'white', 'linear-gradient(180.00deg, rgb(250, 250, 250),rgba(235, 235, 235, 0) 100%)','none') })
