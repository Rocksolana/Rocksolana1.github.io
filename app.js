// Add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".btn-add-to-cart")

for (let i=0; i<addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function(){
        productsCountEl.textContent = + productsCountEl.textContent + +productsQuantity[i].value;
        productsQuantity[i].value = 1;
    })
}

let likeBtns= document.querySelectorAll(".choise2")
console.log(likeBtns)

for (let i=0; i<likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function(){
    /*  if (this.classList.contains("liked")) {
            this.classList.remove("liked")
        } else {
            this.classList.add("liked")
        }*/
        
    //Варіант 2
    this.classList.toggle("liked")
    })
}
//modal

let moreDetailsBtn = document.querySelectorAll (".btn-details");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

moreDetailsBtn.forEach(btn => (
    btn.addEventListener("click", openModal)

))
closeBtn.addEventListener("click", closeModal)
    

function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
modal.addEventListener("click",function(e){
    console.log(e.target)
    if (e.target === modal) {
        closeModal()
    }
})


function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll", showModalByScroll)
    }
}

window.addEventListener("scroll",showModalByScroll)

// change product quantity


let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");
for (let i = 0; i< productsQuantity.length; i++) {
    let currentCount= +productsQuantity[i].value;
    toggleButtonState(currentCount,decrementBtns[i],incrementBtns[i])
}


function toggleButtonState(count,decrementBtns,incrementBtns) {
    decrementBtns.disabled = count <= 1;
    incrementBtns.disabled = count >= 10;
}


for (let i=0; i<incrementBtns.length; i++) {
    incrementBtns[i].addEventListener("click",function() {
        let currentCount = +productsQuantity[i].value;
        let nextCount = currentCount + 1;
        productsQuantity[i].value = nextCount;
        toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])
    })
}
for (let i=0; i<decrementBtns.length; i++){
decrementBtns[i].addEventListener("click",function() {
    let currentCount = +productsQuantity[i].value;
    let nextCount = currentCount - 1;
    productsQuantity[i].value = nextCount;
    toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])
})

}

//Slider

$(".slider-block").slick({
    dots:true
});


/*
////OOP
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");

    function Counter(incrementBtn,decrementBtn,inputField){
        this.domRefs = {
            incrementBtn,
            decrementBtn,
            inputField,
        }
        this.toggleButtonState = function() {
            const count = this.domRefs.inputField.value;
            this.domRefs.decrementBtn.disabled = count <= 1;
            this.domRefs.incrementBtn.disabled = count >= 10;
        }
        this.toggleButtonState();

        this.increment = function () {
            console.log(this)
            let currentCount = + this.domRefs.inputField.value;
            let nextCount = currentCount + 1;
            this.domRefs.inputField.value = nextCount;
            this.toggleButtonState()
        }
        console.log(this)
        this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this))
    
    this.decrement = function () {
        console.log(this)
        let currentCount = + this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState()
    }
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this))

    const counter = [];
    productsQuantity.forEach(item,i) => {
      
const couters[i] = new Counter (incrementBtns[i],decrementBtns[i],productsQuantity[i])
    }}
    */