const modelbtn = document.querySelector(".model-btn")
const closebtn = document.querySelector(".close-btn")
const model = document.querySelector(".model-overlay")

modelbtn.addEventListener("click", function(){
    model.classList.add("open-model")
});

closebtn.addEventListener("click", function(){
   model.classList.remove("open-model")
});