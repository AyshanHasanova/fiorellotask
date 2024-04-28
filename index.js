const basketBtn = document.querySelectorAll(".button");
// const card=document.querySelectorAll(".card")

let basket = [];
if (localStorage.getItem("basket") == null) {
  localStorage.setItem("basket", JSON.stringify(basket));
} else {
  basket = JSON.parse(localStorage.getItem("basket"));
}
class Flower {
  constructor(image, name, id, count,totalPrice) {
    this.image = image;
    this.name = name;
    this.id = id;
    this.count = count;
    this.totalPrice=totalPrice
  }
} //!

for (let i = 0; i < basketBtn.length; i++) {
  basketBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    let image =basketBtn[i].parentElement.previousElementSibling.getAttribute("src");
    let name = basketBtn[i].previousElementSibling.previousElementSibling.textContent;
    let id = basketBtn[i].parentElement.parentElement.getAttribute("data-id");
    let price=parseInt(basketBtn[i].previousElementSibling.firstElementChild.textContent)
    let basket = JSON.parse(localStorage.getItem("basket")); //!
    let check = basket.find((e) => (e.id == id));
    if (check) {
      check.count++;
      check.totalPrice=check.count*price
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      let count = 1;
      let newFlower = new Flower(image, name, id, count,price);

      basket.push(newFlower);
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  });
}
