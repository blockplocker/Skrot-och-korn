function calculatePrice() {
    console.log("calculatePrice() called");
    var price = 0;
    var priceElement = document.getElementById("price");

    if (checkbox1.checked) {
        price += 200000; 
    }
    if (checkbox2.checked) {
        price += 500000;   
    }
    if (checkbox3.checked) {
        price += 700000; 
    }
    priceElement.innerHTML = "Priset av valda fordon " + price + " kr";
    
}


document.addEventListener('DOMContentLoaded', () => {
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var checkbox3 = document.getElementById('checkbox3');

    if (checkbox1) {
        checkbox1.addEventListener('change', calculatePrice);
    }
    if (checkbox2) {
        checkbox2.addEventListener("change", calculatePrice);
    }
    if (checkbox3) {
        checkbox3.addEventListener("change", calculatePrice);
    }
});

console.log("productselect.js loaded");
