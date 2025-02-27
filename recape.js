/* 

const addMoney = document.getElementById("add_money");

addMoney.addEventListener("click", function(){
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseInt(amount) ;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseInt(mainBalance)
    const mainbalanceSum = convertedMainbalance + convertedAmount;
    document.getElementById("main-balance").innerText = mainbalanceSum;
    
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin)

    if(convertedPin === 1234){
        console.log("All Okay");
    } else{
        alert("Invalid Pin")
    }
})

*/