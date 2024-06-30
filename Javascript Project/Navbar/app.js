const navTooggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navTooggle.addEventListener("click", function(){
    // console.log(links.classlist.contains("random"));
    // console.log(links.classlist.contains("links"));
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //     links.classList.add("show-links");
    // }
    links.classList.toggle("show-links")
});