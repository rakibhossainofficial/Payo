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

  
    const accountNumber = document.getElementById("account-number").value;


    if (accountNumber.length === 11) {
      if (amount !== "") {
        if (convertedPin === 1234) {
          document.getElementById("main-balance").innerText = sum;
        } else {
          alert("Invalid Pin!!");
        }
      } else {
        alert("Please Add Amount");
      }
    } else {
      alert("Invalid Account Number!!");
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

const logoutBtn = document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
  });
