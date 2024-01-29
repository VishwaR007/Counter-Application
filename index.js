
// Function to add the number : 
function addNumber() {
    var inputVal = parseInt(document.getElementById('inputID').value);
    var incNum = parseInt(document.getElementById('incNum').value);
    if (inputVal >= 0 && incNum >= 0) {
        console.log("You can add the number");
        document.getElementById('inputID').value = inputVal + incNum;

    } else {
        console.log("You can't add the number");
        alert("Please Enter Some Positive Number ..!")
        document.getElementById('inputID').value = "0"
    }
}

// Function to sub a number : 
function subNumber() {
    var inputVal = parseInt(document.getElementById('inputID').value);
    var incNum = parseInt(document.getElementById('incNum').value);
    if (inputVal >= 0 && incNum >= 0) {
        var resMinInCaseNegative = inputVal - incNum;
        if (resMinInCaseNegative < 0) {
            alert("Reached Out of Limit ....!")
        } else {
            console.log("You can add the number");
            document.getElementById('inputID').value = inputVal - incNum;
            document.getElementById('inputID').value = "0";
        }

    } else {
        console.log("You can't add the number");
        alert("Please Enter Some Positive Number ..!")
        document.getElementById('inputID').value = "0";
    }
}

// Function to clear the input of what to increment : 
function clearNumber() {
    document.getElementById('inputID').value = "0";
}

// Function to clear tyhe input of how much to increment : 
function clearForIncNum() {
    document.getElementById('incNum').value = "0";
}