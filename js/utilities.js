function input(inputId) {
  const inputField = document.getElementById(inputId);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  inputField.value = '';
    return inputValue;
  
  
}