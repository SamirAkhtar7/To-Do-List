const input = document.querySelector("#input");

const submit = document.querySelector("#submit");
const btn = document.querySelector(".remove");


const list = document.querySelector(".list");

submit.addEventListener("click", () => {
  if (input.value === '') {
    alert("Please enter a value");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let rev = document.createElement("button");
    rev.className = "removebtn";
    rev.innerHTML = 'remove';
    li.appendChild(rev);
  }
} ) 

list.addEventListener("click", (event) => { 
  if (event.target.className === "removebtn") {
    event.target.parentElement.remove();
  }
})
