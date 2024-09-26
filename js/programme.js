var page = document.querySelectorAll(".details");
var btn = document.querySelectorAll("button");
var book = document.querySelector(".card");

var place = 0;

for(var i = 0; i < btn.length; i++){
    place = i;
    btn[i].addEventListener("click", function(){
        page[place].style.transform = "rotateY(-135deg)";
    });
}

book.addEventListener("mouseleave", function(){
    for(var i = 0; i < page.length; i++){
        place = i;
        page[i].style.transform = "";
    }   
});