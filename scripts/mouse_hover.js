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

        const currentObj = getObjById(currentLetter, letterPagesArray);
        let num = letterPagesArray.indexOf(currentObj);

        letterHeader.innerHTML = currentObj.HEADING;
        letterParagraph.innerHTML = currentObj.TEXT;  

        previousArrow.classList.remove("hidden");
        nextArrow.classList.remove("hidden");

        // if (num == 0){
        //     previousArrow.classList.add("hidden");
        // } else if (num == 35){
        //     nextArrow.classList.add("hidden");
        // }

        

        // PREVIOUS ARROW
        previousArrow.addEventListener("click", (e) => {
            //nextArrow.classList.remove("hidden");

            if (num == 0){
                num = 35 + 1;
                
            }
        
            num = num - 1;
            let prevObj = letterPagesArray[num];
            letterHeader.innerHTML = prevObj.HEADING;
            letterParagraph.innerHTML = prevObj.TEXT;   
        })
        
        // NEXT ARROW
        nextArrow.addEventListener("click", (e) => {
            num = num + 1;
            let nextObj = letterPagesArray[num];
            letterHeader.innerHTML = nextObj.HEADING;
            letterParagraph.innerHTML = nextObj.TEXT;  
 
            if (num == 35 + 1){
                letterHeader.innerHTML = letterPagesArray[0].HEADING;
                letterParagraph.innerHTML = letterPagesArray[0].TEXT;
                num = 0;

            }

           // previousArrow.classList.remove("hidden");
        })


        // BACK TO GRID PAGE
        letterParagraph.addEventListener("click", (e) => {
            letterPage.classList.add("hidden");
            gridPage.classList.remove("hidden");
            num = 0;
        })
    })
})


function getObjById(id, array) {
    return array.filter(item => item.ID === id)[0]
}



var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    // loop: true,
    autoplay: true,
    path: 'data.json',
  })
