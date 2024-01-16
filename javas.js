function calculator(){
    const number1 = parseFloat(document.getElementsByName("input1")[0].value);
    const number2 = parseFloat(document.getElementsByName("input2")[0].value);
    const result = number1 + number2;
    document.getElementsByName("h5")[0].innerText = result
}