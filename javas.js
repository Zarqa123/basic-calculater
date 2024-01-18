function calculator(){
    const number1 = parseFloat(document.getElementsByName("input1")[0].value);
    const number2 = parseFloat(document.getElementsByName("input2")[0].value);
    const result = number1 + number2;
    const high5 = document.getElementsByName("h5")[0];
    document.getElementsByName("h5")[0].innerText = result
if(!isNaN(result)){
    h5tag.innerText = result;
}else{
    h5tag.innertext ="bitch put number its is calculater not your moms chat";
}
}