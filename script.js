const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 let prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.innerText);
  });

  let row = document.createElement("tr");
  let cell = document.createElement("td");

  cell.innerText = total;
  row.appendChild(cell);
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

getSumBtn.addEventListener("click", getSum);

