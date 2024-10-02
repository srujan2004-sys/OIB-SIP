// Append the clicked button value to the input box
function appendCharacter(character) {
    let inputBox = document.getElementById("inputBox");
    if (inputBox.value === "0") {
        inputBox.value = character;
    } else {
        inputBox.value += character;
    }
}

// Clear the input box
function clearInput() {
    document.getElementById("inputBox").value = "0";
}

// Perform the calculation
function calculate() {
    let inputBox = document.getElementById("inputBox");
    try {
        inputBox.value = eval(inputBox.value.replace("x", "*"));
    } catch (e) {
        inputBox.value = "Error";
    }
}
