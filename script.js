// calculation operatrion AbortController
const display = document.getElementById("display");
function append(value) {
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
function appenderror(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
    
}