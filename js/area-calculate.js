function triangleAreaCalculate() {
  const triangleBaseInputValue = input('triangle-base');
  const triangleHeighInputValue = input('triangle-height');
  const triangleArea = 0.5 * triangleBaseInputValue * triangleHeighInputValue;
  if (isNaN(triangleBaseInputValue || triangleHeighInputValue)) {
    alert('Input a vaid number')
  } else {
    document.getElementById("triangle-area").innerText = triangleArea;
  }
  
   
}