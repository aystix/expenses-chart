var baronee = document.querySelector("#bar1");
var bartwoo = document.querySelector("#bar2");
var barthree = document.querySelector("#bar3");
var barfourr = document.querySelector("#bar4");
var barfivee = document.querySelector("#bar5");
var barsixx = document.querySelector("#bar6");
var barsevenn = document.querySelector("#bar7");


baronee.addEventListener("click", () => {
    document.querySelector("#box-one").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
bartwoo.addEventListener("click", () => {
    document.querySelector("#box-two").style.display = "block";
    document.querySelector("#box-one").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
barthree.addEventListener("click", () => {
    document.querySelector("#box-three").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-one").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
barfourr.addEventListener("click", () => {
    document.querySelector("#box-four").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-one").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
barfivee.addEventListener("click", () => {
    document.querySelector("#box-five").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-one").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
barsixx.addEventListener("click", () => {
    document.querySelector("#box-six").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-one").style.display = "none";
    document.querySelector("#box-seven").style.display = "none";
})
barsevenn.addEventListener("click", () => {
    document.querySelector("#box-seven").style.display = "block";
    document.querySelector("#box-two").style.display = "none";
    document.querySelector("#box-three").style.display = "none";
    document.querySelector("#box-four").style.display = "none";
    document.querySelector("#box-five").style.display = "none";
    document.querySelector("#box-six").style.display = "none";
    document.querySelector("#box-one").style.display = "none";
})
