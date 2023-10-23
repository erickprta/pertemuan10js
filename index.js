
let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    let Rupiah = document.getElementById("Rupiah").value;
    let Ringgit = document.getElementById("Ringgit");
    let Dollar = document.getElementById("Dollar");
    Ringgit.value = Rupiah / 100;
    Dollar.value = Rupiah / 413;
});