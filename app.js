function generateID() {
    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
    let userLastName =
    document.getElementById("lastName").value;
    console.log(userLastName);
    let userAge =
    document.getElementById("age").value;
    console.log(userAge);
    let userPhoneNumber =
    document.getElementById("phoneNumber").value;
    console.log(userPhoneNumber);
    let userAddress =
    document.getElementById("address").value;
    console.log(userAddress);
    document.getElementById("userFirstName").innerHTML = userFirstName
    document.getElementById("userLastName").innerHTML = userLastName
    document.getElementById("userAge").innerHTML = userAge
    document.getElementById("userPhoneNumber").innerHTML = userPhoneNumber
    document.getElementById("userAddress").innerHTML = userAddress
}
