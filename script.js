function appendToDisplay(value) {
    var display = document.querySelector('.display input[type="text"]');
    display.value = display.value+value;
}
function clearDisplay() {
    var display = document.querySelector('.display input[type="text"]');
    display.value = '';
}
function deleteLastCharacter() {
    var display = document.querySelector('.display input[type="text"]');
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function equal(){
    var display=document.querySelector('.display input[type="text"]')
    display.value=eval(display.value)
}
