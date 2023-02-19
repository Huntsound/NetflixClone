function dropcard(e){
    let card = e.parentElement.querySelector(".faq-info");
    let cross = e.querySelector(".thin-x");
    let display = window.getComputedStyle(card).display;
    
    if(display === "block"){
        card.style.display = "none";
        cross.style.transform = "translateY(10%) rotate(45deg)";
    }else if(display === "none"){
        card.style.display = "block";
        cross.style.transform = "translateY(10%)";
    }

}