let basket = JSON.parse(localStorage.getItem("basket"));
const tableBody = document.querySelector(".tableBody");

function rennderUI(basket) {
  let innerHTML = "";
  for (let i = 0; i < basket.length; i++) {
    innerHTML += `
        <tr>
            <td><img width="100px" src="${basket[i].image}" alt=""></td>
            <td>${basket[i].name}</td>
            <td>${basket[i].count}</td>
            <td>${basket[i].totalPrice}</td>
            <td><i onclick="deleteFLower(${basket[i].id})" class="fa-solid fa-x"></i></td>
        </tr>
        `;
  }
  tableBody.innerHTML = innerHTML;
}
rennderUI(basket);

function deleteFLower(id) {
  let check = basket.find((e) => e.id == id);
  let indexOfCheck = basket.indexOf(check);
  if (check.count > 1) {
    check.count--;
    check.totalPrice = check.totalPrice - check.totalPrice / (check.count + 1);
    localStorage.setItem("basket", JSON.stringify(basket));
  } else {
    basket.splice(indexOfCheck, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  rennderUI(basket);
}
