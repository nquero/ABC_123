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

let currentLetter = ''

let letterPage = document.getElementById("letter-page");
let gridPage = document.getElementById("grid-page");

document.querySelectorAll(".box").forEach((box) => {

    letterPage.classList.add("hidden");

    box.addEventListener("click", (e) => {

        console.log(e)
        gridPage.classList.add("hidden");
        letterPage.classList.remove("hidden");

        currentLetter = box.innerHTML;
        let letterHeader = document.getElementById("letterH2");
        letterHeader.innerHTML = currentLetter;

    })
})

document.querySelectorAll(".copy").forEach((text) => {
    
    text.addEventListener("click", (e) => {
        console.log(e)
        letterPage.classList.add("hidden");
        gridPage.classList.remove("hidden");
    })
})
