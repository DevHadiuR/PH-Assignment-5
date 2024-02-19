function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function setBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}
function setTextColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("text-white");
}

function ticketDown(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  const runningValue = value - 1;
  return runningValue;
}
function ticketUp(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  const runningValue = value + 1;
  return runningValue;
}
function intNumber(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}
