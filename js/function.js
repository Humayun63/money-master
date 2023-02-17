function setElementbyId(elementId){
    return document.getElementById(elementId);
};
function getValueFromInput(elementId){
    const element = setElementbyId(elementId);
    const valueString = element.value;
    const value = parseFloat(valueString);
    return value;
}
function updateInnerValue(elementId, value){
    setElementbyId(elementId).innerText = value;
}
function getValueFromInnerText(elementId){
   const element =  setElementbyId(elementId);
   const value = parseFloat(element.innerText);
   return value;
}