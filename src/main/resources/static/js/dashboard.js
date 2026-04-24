let users = 1200;
let revenue = 85000;
let orders = 320;

setInterval(() => {
    document.getElementById("users").innerText = users + Math.floor(Math.random() * 10);
    document.getElementById("revenue").innerText = "₹ " + (revenue + Math.floor(Math.random() * 500));
    document.getElementById("orders").innerText = orders + Math.floor(Math.random() * 5);
}, 2000);