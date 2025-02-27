document
  .getElementById("add_money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseInt(mainBalance);

    const sum = convertedMainbalance + convertedAmount;

    document.getElementById("main-balance").innerText = sum;

    if (convertedPin === 1234) {
      console.log("Okay Add");
    } else {
      console.log("Invalid Pin");
    }
  });

document.getElementById("addmoney").style.display = "block";
document.getElementById("cashout").style.display = "none";

document.getElementById("addmoney-btn").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "none";
  document.getElementById("addmoney").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("cashout").style.display = "block";
  document.getElementById("addmoney").style.display = "none";
});
