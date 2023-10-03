// reusable get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  inputField.value = "";
  return inputValue;
}
// reusable set inner Text
function setInnerText(areaId, area) {
  const setTotalArea = document.getElementById(areaId);
  setTotalArea.innerText = area;
}
// 
function calculateAreaEntry(areaName, areaValue) {
  const areaEntry = document.getElementById('area-show');
  const p = document.createElement('p');
  const count = areaEntry.childElementCount;
  p.classList.add('my-4')
  p.innerHTML = `${count +1}. ${areaName } ${areaValue} cm<sup>2</sup>  <button class="btn btn-sm btn-success">Convert</button>` ;
  areaEntry.appendChild(p);
  
}

function triangleAreaCalculate() {
  const triangleBaseInputValue = getInputValue("triangle-base");
  const triangleHeighInputValue = getInputValue("triangle-height");
  const triangleArea = 0.5 * triangleBaseInputValue * triangleHeighInputValue;
  if (isNaN(triangleBaseInputValue || triangleHeighInputValue)) {
    alert("Input a vaid number");
    return;
  }
  setInnerText("triangle-area", triangleArea);
  calculateAreaEntry('Triangle', triangleArea);
}
function rectangleAreaCalculate() {
  const rectangleWidthInputValue = getInputValue("rectangle-width");
  const rectangleLengthInputValue = getInputValue("rectangle-length");
  const rectangleArea = rectangleWidthInputValue * rectangleLengthInputValue;
  if (isNaN(rectangleWidthInputValue || rectangleLengthInputValue)) {
    alert("Input a vaid number");
    return;
  }
  setInnerText('rectangle-area', rectangleArea);
  calculateAreaEntry("Rectangle", rectangleArea);

}


function parallelogramAreaCalculate() {
  const parallelogramBaseValue = getInputValue('parallelogram-base');
  const parallelogramHeightValue = getInputValue('parallelogram-height');
  const parallelogramArea = parallelogramBaseValue * parallelogramHeightValue;
  if (isNaN(parallelogramBaseValue || parallelogramHeightValue)) {
    alert("Input a vaid number");
    // this is the better way
    return;
  }
  setInnerText('parallelogram-area', parallelogramArea);
  calculateAreaEntry("Parallelogram", parallelogramArea);
}
function ellipseAreaCalculate() {
  const ellipseMajorValue = getInputValue("ellipse-major");
  const ellipseMinorValue = getInputValue("ellipse-minor");
  const ellipseArea = Math.PI * ellipseMajorValue * ellipseMinorValue;
  const ellipseAreaTwoDecimal = ellipseArea.toFixed(2);
  if (isNaN(ellipseMajorValue || ellipseMinorValue)) {
    alert("Input a valid number");
    // this is the better way
    return;
  }
  setInnerText("ellipse-area", ellipseAreaTwoDecimal);
  calculateAreaEntry("Ellipse", ellipseAreaTwoDecimal);
}
/*
 three ways of number validation:
 1. set the proper type of the input field
 2. check type using typeof
 3. NaN means not a number; isNan() function is used to check the input value whether number or not
 
 
 */