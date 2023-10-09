/* Variáveis */

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
const changeBatteryColor = document.querySelector(".empty-color");
const widgets = document.querySelectorAll(".session-container-box");
//const videos = widgets.querySelectorAll(".session-container-box");


/* eventos */

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });
        const button = e.target;
        const id = button.getAttribute("id");
        button.querySelector(".color").classList.add("selected");
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200)
    });
});



window.onscroll = () => {
    // Efeito de preenchimento de cor (Bateria) no widget 02
    if(changeBatteryColor.getBoundingClientRect().y < 500) changeBatteryColor.classList.add("fill-color")
    else if(changeBatteryColor.classList.contains("fill-color")) changeBatteryColor.classList.remove("fill-color");
    
    // Efeito de fade em cada Widget
    widgets.forEach((wgt) => {
        if((wgt.getBoundingClientRect().y-document.documentElement.scrollTop) < 800) {
            wgt.classList.remove("fade-in-section");
        }
        else if((wgt.getBoundingClientRect().y-document.documentElement.scrollTop) > 800) wgt.classList.add("fade-in-section");
        
        //TÁ QUEBRADO!
        if (wgt.querySelector(".video") !== null) {
            const video = wgt.querySelector(".video");
            if ((wgt.getBoundingClientRect().y-document.documentElement.scrollTop) > 800) video.currentTime = 0;
        }
    });
}

