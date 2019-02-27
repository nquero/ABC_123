document.addEventListener("mousemove", function(event){
    
    const x = event.pageX
    const y = event.pageY

    
    document.querySelectorAll(".box").forEach(div =>{
        
        //distància del ratolí del centre - cada div es 100x100 - 
        const divX = div.offsetLeft + div.clientWidth / 2 - x
        const divY = div.offsetTop + div.clientWidth / 2 - y

        //trobar la distància entre X Y - c = √a2 + b2
        const distance = Math.sqrt (divX * divX + divY * divY)
        const score = Math.exp (distance * -0.002)

        // fer servir innerHTML per canviar el contingut d'un element 
        //div.innerHTML = score.toFixed(2)

        div.style.transform = "scale(" + score + ")"
        div.style.fontWeight = 100 + (100 * Math.round(8 * score))             
    })
})

let letterPage = document.getElementById("letter-page");
let gridPage = document.getElementById("grid-page");

let currentLetter = '';
let letterHeader = document.getElementById("letterH2");
let letterParagraph = document.getElementById("letterParag");

let previousArrow = document.getElementById("prev-arrow");
let nextArrow = document.getElementById("next-arrow");


document.querySelectorAll(".box").forEach((box) => {

    letterPage.classList.add("hidden");

    box.addEventListener("click", (e) => {
        //console.log(e)
        gridPage.classList.add("hidden");
        letterPage.classList.remove("hidden");

        currentLetter = box.innerHTML;
        //console.log(currentLetter);

        letterHeader.innerHTML = words[0].HEADING;
        letterParagraph.innerHTML = words[0].TEXT;  
        
        console.log(words[1].ID);
        
        
    })
})


letterParagraph.addEventListener("click", (e) => {
        letterPage.classList.add("hidden");
        gridPage.classList.remove("hidden");
})



previousArrow.addEventListener("click", (e) => {
    console.log("Previous Arrow Clicked");
})


nextArrow.addEventListener("click", (e) => {
    console.log("Next Arrow Clicked");

    // console.log(words[0][0]);  
        letterHeader.innerHTML = words[1].HEADING;
        letterParagraph.innerHTML = words[1].TEXT; 
})



// if current letter = A, then prevArrow shouldn't work - disabled
// if current letter index = 0 (A), then next arrow = currentLetterIndex++

//function to make each letter into a number
//if currentLetter = ID, return HEADER & PARA

