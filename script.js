function buyTicket() {
  addElementById("page-01");
  removeElementById("page-02");
  removeElementById("page-03");
  setElementById("seat-left", 40);
  setElementById("seat-count", 0);
}
let count = 0;
function buyingTicket(elementId) {
  count++;
  if (count > 4) {
    return;
  }

  setBackgroundById(elementId);
  setTextColorById(elementId);
  const runningDownValue = ticketDown("seat-left");
  setElementById("seat-left", runningDownValue);
  const runningUpValue = ticketUp("seat-count");
  setElementById("seat-count", runningUpValue);
  seatTable(elementId);

  setAttribute("disabled", true);
}
function seatTable(elementId) {
  const seatCC = document.getElementById(elementId).innerText;
  const selectedArea = document.getElementById("tbody");
  const newTr = document.createElement("tr");
  const newTd1 = document.createElement("td");
  newTd1.innerText = seatCC;
  newTr.appendChild(newTd1);
  const newTd2 = document.createElement("td");
  newTd2.innerText = "Economoy";
  newTr.appendChild(newTd2);
  const newTd3 = document.createElement("td");
  newTd3.innerText = "550";
  newTr.appendChild(newTd3);
  // ------------------
  selectedArea.appendChild(newTr);
  costCounting();
}
function costCounting() {
  const totalInitialNumber = intNumber("total-price");
  const tbody = document.getElementById("tbody");
  const tbodyTdValue = tbody.childNodes[0].childNodes[2].innerText;
  const tdValue = parseInt(tbodyTdValue);
  const total = totalInitialNumber + tdValue;
  const runningTotalNumber = document.getElementById("total-price");
  runningTotalNumber.innerText = total;

  grandTotal();
}
function grandTotal() {
  const runningTotalNumber = document.getElementById("total-price").innerText;
  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerText = runningTotalNumber;
  const couponBtn = document.getElementById("coupon-apply");

  if (count === 4) {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", true);
  }
}
document.getElementById("coupon-apply").addEventListener("click", function () {
  const couponInputFinalValue = document.getElementById("coupon-field").value;
  const grandTotal = document.getElementById("grand-total").innerText;
  const grandTotalInt = parseInt(grandTotal);
  if (couponInputFinalValue === "NEW15") {
    const newValue1 = grandTotalInt - grandTotalInt * (15 / 100);
    document.getElementById("grand-total").innerText = newValue1;
  } else if (couponInputFinalValue === "Couple 20") {
    const newValue2 = grandTotal - grandTotal * (20 / 100);
    document.getElementById("grand-total").innerText = newValue2;
  }
  const couponDiv = document.getElementById("coupne-div");
  couponDiv.classList.add("hidden");
});
const nextBtn = document.getElementById("next-btn");

document
  .getElementById("number-input")
  .addEventListener("keyup", function (event) {
    const number = parseInt(event.target.value);
    if (number > 0 && count > 0) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", true);
    }
  });

document.getElementById("next-btn").addEventListener("click", function () {
  addElementById("page-02");
  removeElementById("page-03");
});
document.getElementById("continue-btn").addEventListener("click", function () {
  buyTicket();
});
