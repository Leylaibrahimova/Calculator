const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("Filmlər")


container.addEventListener ("click", function (e) {
 if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved"));
e.target.classList.toggle("selected");

let secilenOturacaq = container.querySelectorAll(".seat.selected").length;
let qiymet = parseInt(select.value);
console.log(qiymet);

count.innerText = secilenOturacaq;
amount.innerText = secilenOturacaq * qiymet;
}


)