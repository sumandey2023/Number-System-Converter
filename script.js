function convert() {
  const inputNumber = document.getElementById("inputNumber").value;
  const fromBase = parseInt(document.getElementById("fromBase").value);
  const toBase = parseInt(document.getElementById("toBase").value);

  try {
    // Parse the input number from the specified base to an integer
    const decimalValue = parseInt(inputNumber, fromBase);
    if (isNaN(decimalValue)) throw new Error("Invalid input number");

    // Convert the decimal value to the target base
    const result = decimalValue.toString(toBase).toUpperCase();
    document.getElementById("resultValue").textContent = result;
  } catch (error) {
    document.getElementById("resultValue").textContent = "Error: Invalid input";
  }
}
