document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const pin = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pin);

    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const convertedwithdrawAmount = parseFloat(withdrawAmount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedmainBalance = parseFloat(mainBalance);

    const sum = convertedmainBalance - convertedwithdrawAmount;

    if (agentNumber.length === 11) {
      if (convertedPin === 1234) {
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Enter Valid Pin");
      }
    } else {
      alert("Enter Valid Number!");
    }

});
