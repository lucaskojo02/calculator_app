const display = document.querySelector(".display");

const result = document.querySelector(".result");

function appendToDisplay(value){
    display.value += value;
    continueOperation(value);
};

function clearDisplay(){
    display.value = "";
    result.value = "";
}

function calculate(){
    try{
        const output = eval(display.value);
        result.value = output;

        if (result.value === "Infinity"){
            throw new Error("Error");
        }
    }
    catch(error){
        result.value = "Error"
    }
}

function continueOperation(value){
    if ((result.value !== ""  && result.value !== "Error") &&value === "+" ){
        display.value = result.value;
        display.value += value
        result.value = ""; 
    }
    else if (value === "-" && (result.value !== ""  && result.value !== "Error")){
        display.value = result.value;
        display.value += value;
        result.value = ""; 
    }
    else if (value === "*" && (result.value !== "" && result.value !== "Error")){
        display.value = result.value;
        display.value += value;
        result.value = ""; 
    }
    else if (value === "/" && (result.value !== ""  && result.value !== "Error")){
        display.value = result.value;
        display.value += value;
        result.value = ""; 
    }
    else if (value === "." && (result.value !== ""  && result.value !== "Error")){
        display.value = result.value;
        display.value += value;
        result.value = ""; 
    }

    if (result.value !== "" ){
        display.value = "";
        display.value +=value;
        result.value = "";
    }
}

document.addEventListener('keydown',event=>{
    if (event.key === "=" || event.key === "Enter"){
        calculate();
    }
    else if (event.key === "0" ||event.key === "1"|| event.key === "2"||event.key === "3"||event.key === "4"||event.key === "5"||event.key === "6"||event.key === "7"||event.key === "8"||event.key === "9"||event.key === "-"||event.key === "/" ||event.key === "." || event.key === "*" || event.key === "%" || event.key === "(" || event.key === ")" || event.key === "+"){
        appendToDisplay(event.key)
    }
    else if (event.key === "c" || event.key === "Backspace"){
        clearDisplay();
    }
})