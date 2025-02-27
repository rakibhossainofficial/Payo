document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault()

    const acountNumber = document.getElementById("account-number").value

    const accountPin = document.getElementById("account-pin").value
    
    if(acountNumber.length === 11) {
        console.log("Yess");

        if(accountPin === "1234"){
            window.location.href="./main.html"
        } else{
            alert("Invalid Pin!")
        }

    }else{
        alert("Invalid Account Number!!!")
    }
    
})

